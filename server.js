const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure CORS to allow requests from localhost:1234
const corsOptions = {
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON bodies

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

const dataFilePath = path.join(__dirname, 'notes.json');

// Route to fetch all notes
app.get('/notes', (req, res) => {
    if (fs.existsSync(dataFilePath)) {
        const notes = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
        res.json(notes);
    } else {
        res.json([]);
    }
});

// Route to create a new note
app.post('/notes', (req, res) => {
    const newNote = req.body;

    if (!newNote || !newNote.content) {
        return res.status(400).json({ error: 'Note content is required' });
    }

    let notes = [];
    if (fs.existsSync(dataFilePath)) {
        notes = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    }

    notes.push(newNote);
    fs.writeFileSync(dataFilePath, JSON.stringify(notes, null, 2), 'utf-8');
    res.status(201).json(newNote);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});