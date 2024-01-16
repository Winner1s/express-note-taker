const express = require('express');
const router = express.Router();

const notescontroller = require('../controller/notescontroller.js');

router.get('/api/notes', notescontroller.getAllNotes);
router.get('/api/notes/:id', notescontroller.getNoteById);
router.post('/api/notes', notescontroller.createNote);
router.put('/api/notes/:id', notescontroller.updateNote);
router.delete('/api/notes/:id', notescontroller.deleteNote);

module.exports = router;