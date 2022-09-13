import React from 'react'
import { useEffect, useState } from 'react';
import RankingsCategories from './RankingsCategories';
// import PrefCategories from './PrefCategories';

export default function Header() {
const [states, setStates] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/states")
    .then((r) => r.json())
    .then((states) => setStates(states));
}, [])

return (
    <div className="header">
      {/* <input type="radio" value="state-rankings" className='tabs' />State Rankings */}
      <div className="category-container">
        <RankingsCategories states={states}/>
      </div>
    </div>
  )
}
