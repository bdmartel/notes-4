// Add listeners for inline editing
const addEditListeners = () => {
  const editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = button.dataset.id;
      const noteDiv = event.target.parentElement;
      const note = notes[index];

      // Replace content with textareas
      noteDiv.innerHTML = `
        <textarea class="edit-title">${note.title}</textarea>
        <textarea class="edit-content">${note.content}</textarea>
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
      `;

      // Add save and cancel listeners
      noteDiv.querySelector(".save-btn").addEventListener("click", () => saveEdit(noteDiv, index));
      noteDiv.querySelector(".cancel-btn").addEventListener("click", () => cancelEdit(noteDiv, note));
    });
  });
};

// Save the edited note
const saveEdit = async (noteDiv, index) => {
  const updatedTitle = noteDiv.querySelector(".edit-title").value.trim();
  const updatedContent = noteDiv.querySelector(".edit-content").value.trim();

  if (!updatedContent) {
    alert("Note content cannot be empty!");
    return;
  }

  // Update the note in the array
  notes[index] = {
    title: updatedTitle || "Untitled",
    content: updatedContent,
  };

  try {
    // Send updated notes to the server
    const response = await fetch("http://localhost:3000/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notes),
    });

    if (!response.ok) throw new Error("Failed to save note");

    // Re-render the note with updated content
    noteDiv.innerHTML = `
      <h3>${notes[index].title}</h3>
      <p>${notes[index].content}</p>
      <button class="edit-btn" data-id="${index}">Edit</button>
    `;

    // Re-add edit listener
    noteDiv.querySelector(".edit-btn").addEventListener("click", (event) => {
      const button = event.target;
      addEditListeners(button.dataset.id);
    });
  } catch (error) {
    console.error("Error saving note:", error);
    alert("An error occurred while saving the note.");
  }
};

// Cancel the edit and restore original content
const cancelEdit = (noteDiv, originalNote) => {
  noteDiv.innerHTML = `
    <h3>${originalNote.title}</h3>
    <p>${originalNote.content}</p>
    <button class="edit-btn" data-id="${notes.indexOf(originalNote)}">Edit</button>
  `;
  addEditListeners();
};