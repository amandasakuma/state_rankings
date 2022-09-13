import React from 'react'
import RankingsResults from './RankingsResults'

export default function RankingsCategories({states}) {


  return (
    <main>
      <div className="ranking-category-container">
        <div className="state-choice">
          <h3>Select categories:</h3>
          <select className='states'>
          {
          states.map((state) => 
            <option key={state.id} value={state.name}>{state.name}</option>  
          )} 
          </select>
        </div>

        <div className='category-button-container'>
          {/* <input type="radio" value="state-rankings" className='tabs' />Weed Legalized?
          <input type="radio" value="state-rankings" className='tabs' />Cost of Living */}
          <button className='category-buttons'>Category 3</button>
          <button className='category-buttons'>Category 4</button>
          <button className='category-buttons'>Category 5</button>
          <button className='category-buttons'>Category 6</button>
        </div>
          <button className='reset-button'>reset</button>
      </div>

      <RankingsResults states={states}/>
    </main>
  )
}
