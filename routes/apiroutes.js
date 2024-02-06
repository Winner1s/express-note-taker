const express = require("express");
const router = express.Router();

const notescontroller = require("../controller/notescontroller");

router.get("/notes", notescontroller.getAllNotes);
router.get("/notes/:id", notescontroller.getNoteById);
router.post("/notes", notescontroller.createNote);
router.put("/notes/:id", notescontroller.updateNote);
router.delete("/notes/:id", notescontroller.deleteNote);

module.exports = router;

// // Overall, this code sets up the routes for handling CRUD operations
// (Create, Read, Update, Delete) on notes in the web application. The actual
// implementation of these routes is defined in the notescontroller module.
