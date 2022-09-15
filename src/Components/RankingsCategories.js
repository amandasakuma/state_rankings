import React from 'react'
import { useEffect, useState } from 'react';
import RankingsResults from './RankingsResults'

export default function RankingsCategories({
// stateProfiles, states, temps
}) {

  const [allStates, setAllStates] = useState([])
//  const [all, setAll] = useState({State: []})
  // const [displayRankings, setDisplayRankings] = useState(true)

  useEffect(() => {
  fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) => {
setAllStates({state: data.State, temp: data.Temperature})})
      // .then((data) => setAll(data)) 
  }, [])



  // function handleAddNote(newNote) {
  //     setAllStates([...allStates, newNote])
  // }

  //  useEffect(() => {
  // fetch("http://localhost:9292")
  //     .then((r) => r.json())
  //     .then((data) => {console.log(data); setAll(data)}) 
  // }, [])

  return (
    <main>
      <RankingsResults 
        // stateProfiles={stateProfiles}
      //  states={all.StatStatee}
        //   temps={temps}
        // states={states}
        allStates={allStates}
        // onAddNote={handleAddNote}
        />
    </main>
  )
}



   
