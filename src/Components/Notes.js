import React, {useState, useEffect} from 'react'
import NotesCard from './NotesCard';
import NotesForm from './NotesForm'

export default function Notes() {
  const [notes, setNotes] = useState([])

  //Get request to grab comments
  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch(console.error);
  }, []);

  //Add new Note handler
  function handleNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  //Delete handler
  function handleDeleteNote(id) {
    const updatedNotesArray = notes.filter((note) => note.id !== id);
    setNotes(updatedNotesArray);
  }

  return (

    <div>
      <NotesForm onAddNote={handleNewNote}/>
      {notes.map((note) => (
        <NotesCard key={note.id} id={note.id} note={note} onDeleteNote={handleDeleteNote}/>
      ))}
    </div>
  )
}
