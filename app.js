document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.getElementById("noteForm");
  const noteContent = document.getElementById("noteContent");
  const notesContainer = document.getElementById("notesContainer");

  // Fetch and display notes
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:3000/notes");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const notes = await response.json();
      notesContainer.innerHTML = ""; // Clear existing notes
      
      notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerHTML = `${index + 1}: ${note.content}`; // Render as formatted text
        notesContainer.appendChild(noteDiv);
      });
    } catch (error) {
      console.error("Error fetching notes:", error);
      notesContainer.innerHTML = "<p>Error loading notes.</p>";
    }
  };

  // Add a new note
  const addNote = async (noteInput) => {
    if (!noteInput.trim()) {
      alert("Note content cannot be empty!");
      return;
    }

    const newNote = { content: noteInput }; // Send formatted content

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Failed to add note: " + (errorData.error || response.statusText));
      }

      await fetchNotes(); // Refresh notes
      noteContent.innerHTML = ""; // Clear the contenteditable field
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the note.");
    }
  };

  // Handle form submission
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = noteContent.innerHTML.trim(); // Use innerHTML for formatted content
    if (note) {
      addNote(note);
    } else {
      alert("Note content cannot be empty!");
    }
  });

  // Initial fetch
  fetchNotes();
});