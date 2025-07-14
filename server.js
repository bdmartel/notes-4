const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, "notes.json");

// Helper: Read notes from the file
const readNotes = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading notes:", error);
    return [];
  }
};

// Helper: Write notes to the file
const writeNotes = async (notes) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing notes:", error);
  }
};

// Fetch all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await readNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch notes" });
  }
});

// Fetch a single note by ID
app.get("/notes/:id", async (req, res) => {
  try {
    const notes = await readNotes();
    const noteId = parseInt(req.params.id, 10);
    const note = notes.find((note) => note.id === noteId);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch the note" });
  }
});

// Add a new note
app.post("/notes", async (req, res) => {
  try {
    const notes = await readNotes();
    const newNote = {
      id: notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1, // Generate unique ID
      ...req.body,
    };

    notes.push(newNote);
    await writeNotes(notes);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Could not add note" });
  }
});

// Update a specific note
app.put("/notes/:id", async (req, res) => {
  try {
    const notes = await readNotes();
    const noteId = parseInt(req.params.id, 10);
    const noteIndex = notes.findIndex((note) => note.id === noteId);

    if (noteIndex === -1) {
      return res.status(404).json({ error: "Note not found" });
    }

    notes[noteIndex] = { ...notes[noteIndex], ...req.body };
    await writeNotes(notes);

    res.status(200).json({ message: "Note updated successfully", note: notes[noteIndex] });
  } catch (error) {
    res.status(500).json({ error: "Could not update note" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});