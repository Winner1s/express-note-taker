const express = require('express');
const path = require('path');

const router = express.Router();

const notesController = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

};

const indexController = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

};

router.get('/notes', notescontroller);
router.get('*', indexController);

module.exports = express.Router