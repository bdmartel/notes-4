document.addEventListener("DOMContentLoaded", () => {
    const noteForm = document.getElementById("noteForm");
    const noteContent = document.getElementById("noteContent");
    const notesContainer = document.getElementById("notesContainer");
  
    // Fetch and display notes
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/notes");
        const notes = await response.json();
        notesContainer.innerHTML = ""; // Clear existing notes
        notes.forEach((note, index) => {
          const noteDiv = document.createElement("div");
          noteDiv.className = "note";
          noteDiv.textContent = `${index + 1}: ${note}`;
          notesContainer.appendChild(noteDiv);
        });
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
  
    // Add a new note
    const addNote = async (note) => {
      try {
        const response = await fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ note }),
        });
        if (response.ok) {
          fetchNotes(); // Refresh notes after adding
        } else {
          console.error("Failed to add note:", await response.json());
        }
      } catch (error) {
        console.error("Error adding note:", error);
      }
    };
  
    // Handle form submission
    noteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = noteContent.value.trim();
      if (note) {
        addNote(note);
        noteContent.value = ""; // Clear the textarea
      } else {
        alert("Note content cannot be empty!");
      }
    });
  
    // Initial fetch
    fetchNotes();
  });