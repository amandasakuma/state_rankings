import React from 'react'
import { useEffect, useState } from 'react';
import RankingsResults from './RankingsResults'

export default function RankingsCategories() {
  const [temps, setTemp] = useState([])
  const [cols, setCols] = useState([])
  const [all, setAll] = useState({Temperature: [], LivingCost: []})
  // const [rankings, setRankings] = useState([])
  // const [state, setState] = useState([])
  // const [rankingsDisplay, setRankingsDisplay] = useState([])


  useEffect(() => {
    // fetch("http://localhost:9292/temperatures")
    //   .then((r) => r.json())
    //   .then((data) => setTemp(data))
    // fetch("http://localhost:9292/living_costs")
    //   .then((r) => r.json())
    //   .then((data) => setCols(data));
  fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) => {console.log(data); setAll(data)}) 

  }, [])

  // useEffect(() => {
    
  // }, [])


  // function handleRankingsDisplay () {
  //   setRankingsDisplay((prevRankingsDisplay) => !prevRankingsDisplay)
  // }

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
        temps={all.Temperature}
        cols={all.LivingCost}
        />
    </main>
  )
}



   
