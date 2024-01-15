const express = require('express');
const router = express.Router();
const fs = require('fs');

const notescontroller = require('../controller/notescontroller.js');
const usercontroller = require('../controller/usercontroller.js');

router.get('/api/notes', notescontroller.getAllNotes);
router.get('/api/notes/:id', notescontroller.getNoteById);
router.post('/api/notes', notescontroller.createNote);
router.put('/api/notes/:id', notescontroller.updateNote);
router.delete('/api/notes/:id', notescontroller.deleteNote);

router.get('/api/users', usercontroller.getAllNotes);
router.get('/api/users/:id', usercontroller.getNoteById);
router.post('/api/users', usercontroller.createNote);
router.put('/api/users/:id', usercontroller.updateNote);
router.delete('/api/users/:id', usercontroller.deleteNote);

module.exports = router;