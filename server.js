const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

const dataFilePath = path.join(__dirname, 'notes.json');

// Route to fetch all notes
app.get('/notes', async (req, res) => {
    try {
        const fileExists = await fs.access(dataFilePath).then(() => true).catch(() => false);
        if (!fileExists) return res.json([]);
        const notes = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
        res.json(notes);
    } catch (error) {
        console.error('Error reading notes:', error);
        res.status(500).json({ error: 'Could not fetch notes' });
    }
});

// Route to create a new note
app.post('/notes', async (req, res) => {
    const newNote = req.body;

    if (!newNote.title || !newNote.content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    try {
        let notes = [];
        const fileExists = await fs.access(dataFilePath).then(() => true).catch(() => false);
        if (fileExists) {
            notes = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
        }
        notes.push(newNote);
        await fs.writeFile(dataFilePath, JSON.stringify(notes, null, 2), 'utf-8');
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error saving note:', error);
        res.status(500).json({ error: 'Could not save note' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});