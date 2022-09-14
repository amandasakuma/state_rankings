import React from 'react'
import RankingCard from './RankingCard'

export default function RankingsResults({rankings, state}) {

  const rankingList = rankings.map((ranking) => (
        <RankingCard key={rankings.id} ranking={ranking.Temperature.id} state={state}/>
      ))

  return (
     <div className='ranking-results'>
      {/* <h2 className='ultimate-state-ranking'>Your state ranks TK out of TK</h2> */}
      <div className='ranking-card-grid'>
           <h4>Category Name</h4>
      {rankingList}
      </div>
    </div>
  )
}
