import Quill from "quill";
import "quill/dist/quill.snow.css";

document.addEventListener("DOMContentLoaded", () => {
  const notesContainer = document.getElementById("notesContainer");
  const noteForm = document.getElementById("noteForm");
  const noteTitle = document.getElementById("noteTitle");

  const API_URL = "http://localhost:3000/notes";

  // Initialize Quill editor
  const quill = new Quill("#editor-container", {
    theme: "snow",
    placeholder: "Write your notes here...",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
  });

// Fetch notes from the API
const fetchNotes = async () => {
  console.log("Fetching notes...");
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch notes");

    let notes = await response.json();
    
    // Sort notes by newest first (assuming 'createdAt' field exists)
    notes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    console.log("Fetched and sorted notes:", notes);
    renderNotes(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};

  // Render notes on the page
  const renderNotes = (notes) => {
    console.log("Rendering notes:", notes);
    notesContainer.innerHTML = ""; // Clear existing notes

    notes.forEach((note) => {
      console.log(`Rendering note: ${note.title}, ID: ${note.id}`); // Debugging
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerHTML = `
        <h3>${note.title || "Untitled"}</h3>
        <div>${note.content}</div>
        <button class="edit-btn" data-id="${note.id}">Edit</button>
      `;
      notesContainer.appendChild(noteDiv);
    });

    // Add event listeners to "Edit" buttons
    document.querySelectorAll(".edit-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const noteId = event.target.getAttribute("data-id");
        console.log("Edit button clicked, noteId:", noteId);
        loadNoteForEditing(noteId);
      });
    });
  };

  // Load a note for editing
  const loadNoteForEditing = async (noteId) => {
    if (!noteId) {
      console.error("Note ID is undefined, cannot load for editing");
      return; // Stop execution if noteId is invalid
    }

    console.log(`Loading note for editing: ${noteId}`);
    try {
      const response = await fetch(`${API_URL}/${noteId}`);
      if (!response.ok) throw new Error("Failed to fetch the note");

      const note = await response.json();
      console.log("Loaded Note:", note);

      // Populate form fields
      document.getElementById("noteTitle").value = note.title;
      quill.setContents(quill.clipboard.convert(note.content));

      // Store the note ID for updating later
      noteForm.setAttribute("data-edit-id", noteId);
    } catch (error) {
      console.error("Error loading note for editing:", error);
    }
  };

  // Handle form submission (Add or Edit)
  noteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const noteId = noteForm.getAttribute("data-edit-id"); // Check if editing
    const newNote = {
      title: noteTitle.value.trim(),
      content: quill.root.innerHTML,
    };

    if (!newNote.content || newNote.content === "<p><br></p>") {
      alert("Note content cannot be empty!");
      return;
    }

    console.log("Submitting note:", newNote);
    console.log("Note ID (if editing):", noteId);

    try {
      const url = noteId
        ? `${API_URL}/${noteId}` // Update existing note
        : API_URL; // Add new note

      const method = noteId ? "PUT" : "POST";

      console.log("Request URL:", url, "Method:", method);

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });

      console.log("Response status:", response.status);

      if (!response.ok) throw new Error(noteId ? "Failed to update note" : "Failed to add note");

      console.log(noteId ? "Note updated successfully" : "Note added successfully");

      // Clear form and refresh notes
      noteTitle.value = "";
      quill.setContents([]);
      noteForm.removeAttribute("data-edit-id"); // Clear edit mode
      fetchNotes(); // Refresh the notes
    } catch (error) {
      console.error("Error saving note:", error);
    }
  });

  // Initial fetch to load existing notes
  fetchNotes();
});