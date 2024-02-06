let notes = [
  { id: 1, title: "Note 1", text: "This is note 1" },
  { id: 2, title: "Note 2", text: "This is note 2" },
];

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getNoteById = (req, res) => {
  const id = parseInt(req.params, id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

const createNote = (req, res) => {
  const { title, text } = req.body;
  const id = notes.length + 1;

  const newNote = { id, title, text };
  notes.push(newNote);

  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, text } = req.body;

  const note = notes.find((note) => note.id === id);

  if (note) {
    note.title = title;
    note.text = text;
    res.json(note);
  } else {
    res.status(404).json({ message: "note not found" });
  }
};

const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    const deleteNote = notes.splice(index, 1);
    res.json(deleteNote[0]);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};

//  Overall, this code provides the logic for handling CRUD
//  operations on a collection of notes in a web application.
