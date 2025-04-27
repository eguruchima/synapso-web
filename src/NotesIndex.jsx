export function NotesIndex({ notes, onShow }) {
  return (
    <div>
      <h1>All Notes ({notes.length})</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => onShow(note)}>More</button>
        </div>
      ))}
    </div>
  );
}
