import React from 'react'
import RankingCard from './RankingCard'

export default function RankingsResults() {
  return (
     <div className='ranking-results'>
      <h2 className='ultimate-state-ranking'>Your state ranks TK out of TK</h2>
      <div className='ranking-card-grid'>
      <RankingCard />
      </div>
    </div>
  )
}
