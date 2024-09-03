import express from "express";
import Note from "../Model/noteModel.js";

const router = express.Router();

// GET rqst
router.get("/", async (req, res) => {
  try {
    let allNotes = await Note.find({});
    res.json(allNotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    note ? res.json(note) : res.status(404).send("Note was not found");
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// POST rqst
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    if (body.content === undefined || !body.content) {
      return res
        .status(400)
        .json({ error: "The content for the note is missing!" });
    }
    const newNote = new Note({
      content: body.content,
    });
    const note = await newNote.save();
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH rqst
router.patch("/:id", async (req, res) => {
  try {
    let noteToUpdate = await Note.findByIdAndUpdate(req.params.id);
    if (noteToUpdate) {
      await noteToUpdate.updateOne({ $set: req.body }, { runValidators: true });
      res.status(200).send("The note has been updated!");
    } else {
      res.status(404).send("Note was not found!");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE Rqst
router.delete("/:id", async (req, res) => {
  try {
    const noteToDelete = await Note.findByIdAndDelete(req.params.id);
    if (noteToDelete) {
      res.status(204).end();
    } else {
      res.status(404).send("Note was not found!");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
