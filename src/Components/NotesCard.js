import React from 'react'


export default function NotesCard({note, onDeleteNote, id}) {

  function deleteNote() {
    fetch(`http://localhost:9292/notes/${id}`, {
      method: "DELETE",
    });
    onDeleteNote(id)
  }
  

  return (
    <div className="note-card">
      <p className="note">{note.comment}</p>
      <button onClick={deleteNote} className="delete-button">X</button>
    </div>
  );
}
