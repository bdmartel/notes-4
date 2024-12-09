const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'notes.json');

app.get('/notes', (req, res) => {
    if (fs.existsSync(dataFilePath)) {
        const notes = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
        res.json(notes);
    } else {
        res.json([]);
    }
});
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