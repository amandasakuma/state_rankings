import React from 'react'
import RankingCard from './RankingCard'

export default function RankingsResults({ temps, cols}) {
    console.log(temps, cols)
  const tempList = temps.map((temp) => (
        <RankingCard key={temp.id} col={temp} />
      ))
  const colList = cols.map((col) => (
        <RankingCard key={col.id} col={col} />
      ))

  return (
     <div className='ranking-results'>
      {/* <h2 className='ultimate-state-ranking'>Your state ranks TK out of TK</h2> */}
      <div className='ranking-card-grid'>
           <h4>Category Name</h4>
      {tempList}
      {colList}
      </div>
    </div>
  )
}
