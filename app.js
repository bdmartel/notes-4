document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.getElementById("noteForm");
  const noteTitle = document.getElementById("noteTitle");
  const noteContent = document.getElementById("noteContent");
  const notesContainer = document.getElementById("notesContainer");
  const editForm = document.getElementById("editForm");
  const editTitle = document.getElementById("editTitle");
  const editContent = document.getElementById("editContent");
  const cancelEdit = document.getElementById("cancelEdit");

  let notes = [];
  let currentEditIndex = null;

  // Fetch and display notes
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:3000/notes");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      notes = await response.json();
      renderNotes();
    } catch (error) {
      console.error("Error fetching notes:", error);
      notesContainer.innerHTML = "<p>Error loading notes.</p>";
    }
  };

  // Render Notes
  const renderNotes = () => {
    notesContainer.innerHTML = ""; // Clear existing notes
    notes.slice().reverse().forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <h3>${note.title || "Untitled"}</h3>
        <p>${note.content}</p>
        <button class="edit-btn" data-id="${index}">Edit</button>
      `;
      notesContainer.appendChild(noteDiv);
    });
    addEditListeners();
  };

  // Add listeners for editing notes
  const addEditListeners = () => {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentEditIndex = button.dataset.id;
        const note = notes[currentEditIndex];
        editTitle.value = note.title;
        editContent.value = note.content;
        editForm.style.display = "block";
        noteForm.style.display = "none";
      });
    });
  };

  // Add a new note
  const addNote = async (titleInput, contentInput) => {
    if (!contentInput.trim()) {
      alert("Note content cannot be empty!");
      return;
    }

    const newNote = { title: titleInput.trim() || "Untitled", content: contentInput.trim() };

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) throw new Error("Failed to add note");

      await fetchNotes(); // Refresh notes
      noteTitle.value = ""; // Clear the title field
      noteContent.value = ""; // Clear the content field
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the note.");
    }
  };

  // Edit an existing note
  const editNote = async (index, updatedNote) => {
    notes[index] = updatedNote;

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notes),
      });

      if (!response.ok) throw new Error("Failed to update note");

      fetchNotes();
      editForm.style.display = "none";
      noteForm.style.display = "block";
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the note.");
    }
  };

  // Handle Edit Form Submission
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedNote = {
      title: editTitle.value.trim() || "Untitled",
      content: editContent.value.trim(),
    };

    if (!updatedNote.content) {
      alert("Note content cannot be empty!");
      return;
    }

    editNote(currentEditIndex, updatedNote);
  });

  // Handle Cancel Edit
  cancelEdit.addEventListener("click", () => {
    editForm.style.display = "none";
    noteForm.style.display = "block";
  });

  // Handle New Note Form Submission
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();
    addNote(title, content);
  });

  // Initial fetch
  fetchNotes();
});