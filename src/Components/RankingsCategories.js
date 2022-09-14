import React from 'react'
import { useEffect, useState } from 'react';
import RankingsResults from './RankingsResults'

export default function RankingsCategories({states}) {
  const [rankings, setRankings] = useState([])
  const [rankingsDisplay, setRankingsDisplay] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((rankings) => setRankings(rankings));
  }, [])

  function handleRankingsDisplay () {
    setRankingsDisplay((prevRankingsDisplay) => !prevRankingsDisplay)
  }
  const livingCost = rankings.LivingCost

  return (
    <main>
      <div className="ranking-category-container">
        <div className='category-button-container'>
          <button className='category-buttons'>Cost of Living</button>
          <button className='category-buttons'>Average Temperature</button>
          <button className='category-buttons'>Marijuana Laws</button>
          <button className='category-buttons'>Life Expectancy</button>
        </div>
      </div>

      <RankingsResults 
        rankings={rankings} 
        states={states}
        />
    </main>
  )
}

     {/* <button className='reset-button'>reset</button> */}
    {/* <input type="radio" value="state-rankings" className='tabs' />Weed Legalized?
          <input type="radio" value="state-rankings" className='tabs' />Cost of Living */}


   
