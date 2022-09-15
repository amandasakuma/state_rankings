import React, {useState, useEffect} from 'react'


export default function RankingCard({allState, handleNote, handleFormSubmit, 
// stateProfile
// state,
// temp
}) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);

const handleSubmitComment = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: newComment, state_id: allState.id})
    })
    .then(r => r.json())
    .then((data) => {
        console.log(data);
          setNewComment("")
})
// (addComment => {
//       handleAddComment(addComment)
//       setNewComment("");
    
   
  }

    function handleAddComment(comment) { 
      setComments([...comments, comment])    
    }


  return (
    <div className='ranking-card'>
      <div>
        <ol>
          {allState.name}
          {allState.life_expectancy_id}
          {/* .......... */}
      <form 
        className='add-comment'
        onSubmit={handleSubmitComment}>
        <textarea 
          type="text" 
          name="comment" 
          onChange={(e) => setNewComment(e.target.value)}>
        </textarea>                
        <input type="submit" value='Notes'></input>            
    </form>
        </ol>
      </div>
          {/* <form >
            <input type="text" 
                // value={value}
                onChange={handleNote}
                placeholder="Notes" />
        <button 
          type="submit"
          onSubmit={handleFormSubmit}
          >Add note</button>
      </form> */}
    </div>
  )
}
