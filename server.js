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

// Fetch all notes
app.get("/notes", async (req, res) => {
    try {
        const notes = JSON.parse(await fs.readFile(dataFilePath, "utf-8"));
        res.json(notes);
    } catch (error) {
        console.error("Error reading notes:", error);
        res.status(500).json({ error: "Could not fetch notes" });
    }
});

// Add a new note
app.post("/notes", async (req, res) => {
    try {
        const notes = JSON.parse(await fs.readFile(dataFilePath, "utf-8"));
        const newNote = req.body;
        notes.push(newNote);
        await fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), "utf-8");
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error adding note:", error);
        res.status(500).json({ error: "Could not add note" });
    }
});

// Update all notes
app.put("/notes", async (req, res) => {
    try {
        const updatedNotes = req.body;
        await fs.writeFile(dataFilePath, JSON.stringify(updatedNotes, null, 2), "utf-8");
        res.status(200).json({ message: "Notes updated successfully" });
    } catch (error) {
        console.error("Error updating notes:", error);
        res.status(500).json({ error: "Could not update notes" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});