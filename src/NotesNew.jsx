import { useState } from "react";

export function NotesNew({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData();
    params.append("title", title);
    params.append("content", content);
    onCreate(params, () => {
      setTitle("");
      setContent("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title: <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        Content: <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
