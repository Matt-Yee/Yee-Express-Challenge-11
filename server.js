const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const notesRouter = require('./routes/notes');

app.use(express.json());
app.use(express.static('public'));

app.use('/notes', notesRouter);
app.use('/api', notesRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.use((req, res, next) => {
    res.status(404).send('404 Error: Page not found');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
    .on('error', (err) => {
        console.error('Error starting server:', err);
    });