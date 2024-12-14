document.addEventListener("DOMContentLoaded", ()=>{
    const noteForm = document.getElementById("noteForm");
    const noteTitle = document.getElementById("noteTitle");
    const noteContent = document.getElementById("noteContent");
    const notesContainer = document.getElementById("notesContainer");
    // Fetch and display notes
    const fetchNotes = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/notes");
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const notes = await response.json();
            notesContainer.innerHTML = ""; // Clear existing notes
            // Reverse the notes array to show newest first
            notes.slice().reverse().forEach((note, index)=>{
                const noteDiv = document.createElement("div");
                noteDiv.className = "note";
                noteDiv.innerHTML = `
          <h3>${note.title || "Untitled"}</h3>
          <p>${note.content}</p>
        `;
                notesContainer.appendChild(noteDiv);
            });
        } catch (error) {
            console.error("Error fetching notes:", error);
            notesContainer.innerHTML = "<p>Error loading notes.</p>";
        }
    };
    // Add a new note
    const addNote = async (titleInput, contentInput)=>{
        if (!contentInput.trim()) {
            alert("Note content cannot be empty!");
            return;
        }
        const newNote = {
            title: titleInput.trim() || "Untitled",
            content: contentInput.trim()
        };
        try {
            const response = await fetch("http://localhost:3000/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newNote)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error("Failed to add note: " + (errorData.error || response.statusText));
            }
            await fetchNotes(); // Refresh notes
            noteTitle.value = ""; // Clear the title field
            noteContent.value = ""; // Clear the content field
        } catch (error) {
            console.error(error);
            alert("An error occurred while adding the note.");
        }
    };
    // Handle form submission
    noteForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();
        addNote(title, content);
    });
    // Initial fetch
    fetchNotes();
});

//# sourceMappingURL=index.7c0ccee6.js.map
