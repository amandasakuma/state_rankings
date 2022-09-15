import React, {useState} from 'react'
import RankingCard from './RankingCard'

export default function RankingsResults({ allStates, onAddNote }) {
  // const [selectCategory, setSelectCategory] = useState(false)
  const [noteData, setNoteData] = useState({note: "" });
  const [newNote, setNewNote] = useState({note: ""})

  function handleNote(e){
    setNoteData({...noteData, [e.target.name]: e.target.value})
    setNewNote({...noteData, [e.target.name]: e.target.value})
  }

    function handleFormSubmit(e){
    e.preventDefault()
    console.log(noteData)

    fetch('http://localhost:9292/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    .then(r => r.json())
    .then(data => {
      setNoteData(onAddNote)
    })
  }

  return (
     <div className='ranking-results'>
      <div className='ranking-card-grid'>
        {
        allStates.map((allState) => (
        <RankingCard key={allState.id} allState={allState} handleNote={handleNote} handleFormSubmit={handleFormSubmit}/>
      ))
        }
      </div>
    </div>
  )
}


        /* <div className="ranking-category-container">
          <div className='category-button-container' >
            <button className='category-buttons' onClick={(e) => handleButtons(e)}>Cost of Living</button>
            <button className='category-buttons' onClick={handleButtons}>Average Temperature</button>
            <button className='category-buttons'>Marijuana Laws</button>
            <button className='category-buttons'>Life Expectancy</button>
          </div>
      </div> */


    // const allStateList = allStates.map((allState) => (
    //     <RankingCard key={allState.id} allState={allState} />
    //   ))

    // const allStateList = allStates.map((allState => {
    //   return (<li>
    //           <h3 key={allState.id} allState={allState}>{allState}</h3>
    //           {/* <p>Temperature scale: {temp.temp_scale}</p> */}
    //           </li>
    //         )              
    // }))

  //   const costOfLivingList = cols.map((col => {
  //     return (<li>
  //             <h3 key={col.id} col={col}>{col.state_name}</h3>
  //             <p>Cost index {col.cost_index}</p>
  //             </li>
  //           )              
  //   }))
  // console.log(tempList)

  //   const handleButtons = (e) => {
  //     setSelectCategory((selectCategory) => !selectCategory)
  //     console.log(e.target.value);
  // }

           
      // <ol>
      //   {/* { selectCategory ? ({tempList}) : null} */}
      //   {/* {allStateList} */}

       
      // </ol>
      // <ol>
      //    {/* {costOfLivingList} */}
      // </ol>
   