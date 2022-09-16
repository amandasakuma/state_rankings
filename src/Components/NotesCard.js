import React from 'react'


export default function NotesCard({note, onDeleteNote, id, states}) {

  function deleteNote() {
    fetch(`http://localhost:9292/notes/${id}`, {
      method: "DELETE",
    });
    onDeleteNote(id)
  }
  return (
    <div className="note-card">
     <h3><span className='delete-note'><button onClick={deleteNote} className="delete-button">X</button></span><span className="note-state">STATE: </span> {note.state}</h3>
      <p className="note">{note.comment}</p>
      
    </div>
  );
}
