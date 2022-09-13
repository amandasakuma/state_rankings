import React from 'react'

export default function RankingCard({state}) {
  return (
    <div className='ranking-card'>
      <ol>
        <ul>{state.id}. {state.name}</ul>
      </ol>
    </div>
  )
}
