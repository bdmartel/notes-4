document.addEventListener("DOMContentLoaded", ()=>{
    const notesContainer = document.getElementById("notesContainer");
    const noteForm = document.getElementById("noteForm");
    const noteTitle = document.getElementById("noteTitle");
    const noteContent = document.getElementById("noteContent");
    const API_URL = "http://localhost:3000/notes";
    // Fetch and display notes
    const fetchNotes = async ()=>{
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Failed to fetch notes");
            const notes = await response.json();
            renderNotes(notes);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
    // Render notes
    const renderNotes = (notes)=>{
        notesContainer.innerHTML = ""; // Clear existing notes
        notes.forEach((note, index)=>{
            const noteDiv = document.createElement("div");
            noteDiv.className = "note";
            noteDiv.innerHTML = `
        <h3 contenteditable="true" data-id="${index}" class="note-title">${note.title}</h3>
        <p contenteditable="true" data-id="${index}" class="note-content">${note.content}</p>
        <button class="save-btn" data-id="${index}">Save</button>
      `;
            // Save note changes
            noteDiv.querySelector(".save-btn").addEventListener("click", async ()=>{
                const updatedTitle = noteDiv.querySelector(".note-title").textContent.trim();
                const updatedContent = noteDiv.querySelector(".note-content").textContent.trim();
                if (!updatedContent) {
                    alert("Note content cannot be empty!");
                    return;
                }
                try {
                    const response = await fetch(`${API_URL}/${index}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: updatedTitle,
                            content: updatedContent
                        })
                    });
                    if (!response.ok) throw new Error("Failed to save note");
                    fetchNotes();
                } catch (error) {
                    console.error("Error saving note:", error);
                }
            });
            notesContainer.appendChild(noteDiv);
        });
    };
    // Add new note
    noteForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const newNote = {
            title: noteTitle.value.trim() || "Untitled",
            content: noteContent.value.trim()
        };
        if (!newNote.content) {
            alert("Note content cannot be empty!");
            return;
        }
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newNote)
            });
            if (!response.ok) throw new Error("Failed to add note");
            noteTitle.value = ""; // Clear input
            noteContent.value = ""; // Clear textarea
            fetchNotes();
        } catch (error) {
            console.error("Error adding note:", error);
        }
    });
    // Initial fetch
    fetchNotes();
});

//# sourceMappingURL=index.7c0ccee6.js.map
