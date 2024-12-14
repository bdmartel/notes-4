const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, "notes.json");

// Read notes from file
const readNotes = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading notes:", error);
    return [];
  }
};

// Write notes to file
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

// Add a new note
app.post("/notes", async (req, res) => {
  try {
    const notes = await readNotes();
    const newNote = req.body;

    if (!newNote.content) {
      return res.status(400).json({ error: "Note content is required" });
    }

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
      const updatedNote = req.body;
  
      if (noteId < 0 || noteId >= notes.length) {
        return res.status(404).json({ error: "Note not found" });
      }
  
      if (!updatedNote.content) {
        return res.status(400).json({ error: "Note content is required" });
      }
  
      // Update the specific note
      notes[noteId] = updatedNote;
      await writeNotes(notes);
      res.status(200).json({ message: "Note updated successfully", note: updatedNote });
    } catch (error) {
      res.status(500).json({ error: "Could not update note" });
    }
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});