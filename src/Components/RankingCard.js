import React from 'react'


export default function RankingCard({allState, handleNote, handleFormSubmit}) {


  return (
    <div className='ranking-card'>
      <ol>
        <ul className="cost-of-living">
          {allState}
          {/* {col.id}. {col.state_name}  */}
          {/* <p>Cost Index: {col.cost_index}</p> 
          <p>Temperature: {col.temperature}</p> */}
          {/* <button>save me</button> */}
          <form >
            <input type="text" 
                // value={value}
                onChange={handleNote}
                placeholder="Notes" />
        <button 
          type="submit"
          onSubmit={handleFormSubmit}
          >Add note</button>
      </form>
         </ul>
      </ol>
    </div>
  )
}
