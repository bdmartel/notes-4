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
            console.log("Fetched Notes:", notes); // Debugging log
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
        <h3>${note.title || "Untitled"}</h3>
        <p>${note.content}</p>
        <button class="edit-btn" data-id="${index}">Edit</button>
      `;
            // Add event listener for editing
            noteDiv.querySelector(".edit-btn").addEventListener("click", ()=>{
                const editForm = `
          <input type="text" class="edit-title" value="${note.title || "Untitled"}" />
          <textarea class="edit-content">${note.content}</textarea>
          <button class="save-btn" data-id="${index}">Save</button>
        `;
                noteDiv.innerHTML = editForm;
                // Save edited note
                noteDiv.querySelector(".save-btn").addEventListener("click", async ()=>{
                    const updatedTitle = noteDiv.querySelector(".edit-title").value.trim();
                    const updatedContent = noteDiv.querySelector(".edit-content").value.trim();
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
                        console.log("Note updated successfully");
                        fetchNotes(); // Refresh the notes
                    } catch (error) {
                        console.error("Error saving note:", error);
                    }
                });
            });
            notesContainer.appendChild(noteDiv);
        });
    };
    // Add a new note
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
            console.log("Note added successfully");
            noteTitle.value = ""; // Clear inputs
            noteContent.value = "";
            fetchNotes(); // Refresh notes
        } catch (error) {
            console.error("Error adding note:", error);
        }
    });
    // Initial fetch
    fetchNotes();
});

//# sourceMappingURL=index.7c0ccee6.js.map
