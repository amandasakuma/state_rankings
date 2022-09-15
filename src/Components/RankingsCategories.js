import React from 'react'
import { useEffect, useState } from 'react';
import RankingsResults from './RankingsResults'

export default function RankingsCategories() {
  const [allStates, setAllStates] = useState([])
  // const [temps, setTemp] = useState([])
  // const [cols, setCols] = useState([])
  // const [all, setAll] = useState({Temperature: [], LivingCost: []})
  const [displayRankings, setDisplayRankings] = useState(true)

  useEffect(() => {
  fetch("http://localhost:9292/states")
      .then((r) => r.json())
      .then((data) => setAllStates(data))
      // .then((data) => setAll(data)) 
  }, [])

  function handleAddNote(newNote) {
      setAllStates([...allStates, newNote])
  }

  // const list = all.Temperature( item => {
  //   return (<li key={item.Temperature}>{item.Temperature}</li>)
  // })

  // const onSelectCategory = () => {
  //   setDisplayRankings(displayRankings => !displayRankings)
  // }

  return (
    <main>
      <RankingsResults 
        allStates={allStates}
        onAddNote={handleAddNote}
        // temps={all.Temperature}
        // cols={all.LivingCost}
        />
    </main>
  )
}



   
