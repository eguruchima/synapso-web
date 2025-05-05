import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { getAllNotes, createNote, updateNote, destroyNote } from "./api/notes";
import { NotesIndex } from "./components/NotesIndex";
import { NotesNew } from "./components/NotesNew";
import { NotesShow } from "./components/NotesShow";

export function NotesPage() {
  // state for list of notes
  const [notes, setNotes] = useState([]);
  // state for currently selected note when editing
  const [selectedNote, setSelected] = useState(null);
  // router navigation helper
  const navigate = useNavigate();

  // 1) Load all notes
  useEffect(() => {
    getAllNotes()
      .then((data) => setNotes(data))
      .catch((error) => console.error("Could not load notes:", error));
  }, []);

  // 2) Create a new note and then navigate back to index
  const handleCreate = (params, resetForm) => {
    createNote(params)
      .then((newNote) => {
        setNotes((prev) => [...prev, newNote]);
        resetForm();
        navigate("(");
      })
      .catch((error) => console.error("Failed to create note:", error));
  };

  // 3) Show a note
  const handleShow = (note) => {
    setSelected(note);
    navigate(`${note.id}/edit`);
  };

  // 4) Update an existing note, then return to index
  const handleUpdate = (note, params, resetForm) => {
    updateNote(note.id, params)
      .then((updated) => {
        setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
        resetForm();
        setSelected(null);
        navigate("(");
      })
      .catch((error) => console.error("Failed to update note:", error));
  };

  // 5) Delete a note, remove it from state, and return to index
  const handleDestroy = (note) => {
    destroyNote(note.id)
      .then(() => {
        setNotes((prev) => prev.filter((n) => n.id !== note.id));
        setSelected(null);
        navigate("(");
      })
      .catch((error) => console.error("Failed to delete note:", error));
  };

  return (
    <div>
      {/* link to create view */}
      <Link to="new">+ New Note</Link>
      {/* define our routes */}
      <Routes>
        <Route index element={<NotesIndex notes={notes} onShow={handleShow} />} />
        <Route path="new" element={<NotesNew onCreate={handleCreate} />} />
        <Route
          path=":id/edit"
          element={
            selectedNote ? <NotesShow note={selectedNote} onUpdate={handleUpdate} onDestroy={handleDestroy} /> : null
          }
        />
      </Routes>
    </div>
  );
}
