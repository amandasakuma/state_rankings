import React from 'react'
import RankingsResults from './RankingsResults'

export default function RankingsCategories() {
  return (
    <main>
      <div className="category-inquiry">
        <div className="state-choice">
          <h3>Enter state:</h3>
          <select className='states'>
            <option value="states">States</option>
          </select>
        </div>

        <div className='category-button-container'>
          <button className='category-buttons'>Category 1</button>
          <button className='category-buttons'>Category 2</button>
          <button className='category-buttons'>Category 3</button>
          <button className='category-buttons'>Category 4</button>
          <button className='category-buttons'>Category 5</button>
          <button className='category-buttons'>Category 6</button>
        </div>
          <button className='reset-button'>reset</button>
      </div>

      <RankingsResults />
    </main>
  )
}
