const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// File path for notes storage
const dataFilePath = path.join(__dirname, "notes.json");

// Utility: Read notes from file
const readNotes = async () => {
    try {
        const data = await fs.readFile(dataFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading notes:", error);
        throw new Error("Could not read notes");
    }
};

// Utility: Write notes to file
const writeNotes = async (notes) => {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing notes:", error);
        throw new Error("Could not write notes");
    }
};

// Fetch all notes
app.get("/notes", async (req, res) => {
    try {
        const notes = await readNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
    }
});

// Update a specific note
app.put("/notes/:id", async (req, res) => {
    try {
        const notes = await readNotes();
        const noteId = parseInt(req.params.id, 10);
        const updatedNote = req.body;

        if (!updatedNote.content) {
            return res.status(400).json({ error: "Note content is required" });
        }

        if (noteId < 0 || noteId >= notes.length) {
            return res.status(404).json({ error: "Note not found" });
        }

        notes[noteId] = updatedNote;
        await writeNotes(notes);
        res.status(200).json({ message: "Note updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a specific note
app.delete("/notes/:id", async (req, res) => {
    try {
        const notes = await readNotes();
        const noteId = parseInt(req.params.id, 10);

        if (noteId < 0 || noteId >= notes.length) {
            return res.status(404).json({ error: "Note not found" });
        }

        notes.splice(noteId, 1);
        await writeNotes(notes);
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});