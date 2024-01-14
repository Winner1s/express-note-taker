const express = require('express');
const router = express.Router();

const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');

router.get('api/notes', notesController.getAllNotes);
router.get('api/notes/:id', notesController.getNotesById);
router.post('api/notes', notesController.CreateNote);
router.put('api/notes/:id', notesController.updateUser);
router.get('api/notes/:id', notesController.deleteUser);

router.get('api/users', usersController.getAllNotes);
router.get('api/users/:id', usersController.getNotesById);
router.post('api/users', usersController.CreateNote);
router.put('api/users/:id', usersController.updateUser);
router.get('api/users/:id', usersController.deleteUser);

module.exports - router;