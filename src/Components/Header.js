import React from 'react'
import { useEffect, useState } from 'react';
import RankingsCategories from './RankingsCategories';
// import PrefCategories from './PrefCategories';

export default function Header() {
//  const [all, setAll] = useState([])
//  const [all, setAll] = useState({Temperature: [], LivingCost: [], State: [], LifeExpectancy: [], MarijuanaLaw: [] })

//  useEffect(() => {
//   fetch("http://localhost:9292")
//       .then((r) => r.json())
//       .then((data) => {console.log(data); setAll(data)}) 

//   }, [])
// const [states, setStates] = useState([])
// const [stateSelection, setStateSelection] = useState("")

// useEffect(() => {
//   fetch("http://localhost:9292/states")
//     .then((r) => r.json())
//     .then((data) => setStates(data));
// }, [])

// const handleStates = (e) => {
//   const getStateId = e.target.value;
//   console.log(getStateId);
//   // setStateId(getStateId);
// }

return (
    <div className="header">
      {/* <div className="category-container">
         <select className='states' onChange={(e) => handleStates(e)}>
            <option value="states" >States</option>
          {
          states.map((state) => 
            <option key={state.id} value={state.name}>{state.name}</option>  
          )} 
          </select>
        </div>

          {stateId} */}
        {/* <RankingsCategories 
            stateProfiles={all}
          states={all.State}
          temps={all.Temperature}
          cols={all.LivingCost}
          life={all.LifeExpectancy}
          weed={all.MarijuanaLaw}
          /> */}
      </div>
  )
}
