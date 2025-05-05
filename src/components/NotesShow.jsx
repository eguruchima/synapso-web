import { useState } from "react";

export function NotesShow({ note, onUpdate, onDestroy }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handnleSubmit = (e) => {
    e.preventDefault();
    const params = new FormData();
    params.append("title", title);
    params.append("content", content);
    onUpdate(note, params, () => {});
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={handnleSubmit}>
        <div>
          Title: <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          Content: <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Update</button>{" "}
        <button type="button" onClick={() => onDestroy(note)}>
          Delete
        </button>
      </form>
    </div>
  );
}
