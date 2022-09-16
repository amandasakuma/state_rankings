import React, {useState, useEffect} from 'react'
import NotesCard from './NotesCard';
import NotesForm from './NotesForm'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [states, setStates] = useState([])
const [getState, setGetState] = useState("")
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

  useEffect(() => {
      fetch("http://localhost:9292/states")
        .then((r) => r.json())
        .then((data) => setStates(data));
  }, [])

  const handleStates = (e) => {
    let stateId = e.target.value;
    let stateName = e.target[e.target.selectedIndex].dataset.statename;
    setGetState({id: stateId, name: stateName})

  }

  return (

    <div>
      <div className="category-container">
         <select className='states' onChange={(e) => handleStates(e)}>
            <option value="states" >States</option>
          {
          states.map((state) => 
            <option key={state.id} data-statename={state.name} value={state.id}>{state.name}</option>  
          )} 
          </select>
      </div>
      <NotesForm getState={getState} onAddNote={handleNewNote}/>
      {notes.map((note) => (
        <NotesCard key={note.id} id={note.id} note={note} states={states} onDeleteNote={handleDeleteNote}/>
      ))}
    </div>
  )
}
