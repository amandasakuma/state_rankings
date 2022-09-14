import React
// {useState} 
from 'react'


export default function RankingCard({ranking}) {
  // const [display, setDisplay] = useState()

  // function handleDisplay(){

  // }

  return (
    <div className='ranking-card'>
      <ol>
        <ul>{ranking.Temperature.id}. {ranking.Temperature.state_name} 
          <p>Cost index: {ranking.cost_index}</p>
        </ul>
      </ol>
    </div>
  )
}
