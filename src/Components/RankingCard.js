import React from 'react'


export default function RankingCard({col}) {


  return (
    <div className='ranking-card'>
      <ol>
        <ul className="cost-of-living">{col.id}. {col.state_name} 
          {/* <p>Cost Index: {col.cost_index}</p> 
          <p>Temperature: {col.temperature}</p> */}
         </ul>
      </ol>
    </div>
  )
}
