import React from 'react'
import RankingCard from './RankingCard'

export default function RankingsResults({states}) {
  return (
     <div className='ranking-results'>
      <h2 className='ultimate-state-ranking'>Your state ranks TK out of TK</h2>
      <div className='ranking-card-grid'>
           <h4>Category Name</h4>
      {states.map((state) => (
        <RankingCard key={states.id} state={state}/>
      ))}
      </div>
    </div>
  )
}
