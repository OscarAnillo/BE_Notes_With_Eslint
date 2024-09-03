import mongoose from "mongoose";

const { Schema, model } = mongoose;

const noteSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const Note = model("Note", noteSchema);
export default Note;
