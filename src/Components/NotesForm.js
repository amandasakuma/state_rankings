import React, {useState, useEffect} from 'react'

const initialForm = {comment: ""}

export default function NotesForm({onAddNote}) {
  const [noteData, setNoteData] = useState(initialForm)

  function handleChange(event) {
    setNoteData({
      ...noteData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      comment: noteData.comment
  };

    fetch('http://localhost:9292/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
      .then(res => res.json())
        .then(onAddNote)
        .then(setNoteData(initialForm))
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="notes-form">
        <div>
          <input 
            type="text"
            name="comment"
            placeholder="Comment"
            value={noteData.comment}
            onChange={handleChange}
          />
        </div>
        <button onSubmit={handleSubmit} className="form-submit" type="submit">Add Note</button>
      </form>
    </div>
  )
}
