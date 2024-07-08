const express = require('express');
const router = express.Router();
// const path = require('path');
const notes = [];

// Define your routes here
// router.get('/', (req, res) => {
//     res.send('This is the notes page');
// });

router.get('/new', (req, res) => {
    res.send('This is the new note page');
});

router.get('/edit', (req, res) => {
    res.send('This is the edit note page');
});

router.get('/delete', (req, res) => {
    res.send('This is the delete note page');
});

router.get('/notes', (req, res) => {
    res.json(notes);
    // res.send('This is the api notes page');
});

router.post('/notes', (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }
    const note = { 
        id: notes.length, 
        text: req.body.text 
    };
    notes.push(note);
    res.json(note);
    console.log(notes);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find((note, index) => index == id);
    if (!note) {
        res.status(404).json({ message: 'Note not found' });
        return;
    }
    notes = notes.filter((note, index) => index != id);
    res.json({ message: 'Note deleted successfully' });
});

module.exports = router;