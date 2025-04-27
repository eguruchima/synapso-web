import { useEffect, useState } from "react";
import { getAllNotes, createNote } from "../api/notes";
import { NotesIndex } from "../components/NotesIndex";
import { NotesNew } from "../components/NotesNew";

export function NotesPage() {
  const [notes, setNotes] = useState([]);

  // 1) Loading all notes on mount
  useEffect(() => {
    getAllNotes()
      .then((data) => setNotes(data))
      .catch((error) => {
        console.error("Could not load notes:", error);
      });
  }, []);

  // 2) Create a new note and refresh
  const handleCreate = (params, resetForm) => {
    createNote(params)
      .then((newNote) => {
        setNotes((prev) => [...prev, newNote]);
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to create note:", error);
      });
  };

  // 3) Stub for "Show action"
  const handleShow = (note) => {
    console.log("show this note:", note);
  };

  return (
    <div>
      <NotesNew onCreate={handleCreate} />
      <NotesIndex notes={notes} onShow={handleShow} />
    </div>
  );
}
