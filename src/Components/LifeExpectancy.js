import React from 'react'
import { useEffect, useState } from 'react';

export default function LifeExpectancy() {
      const [lives, setLives] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/life_expectancy")
      .then((r) => r.json())
      .then((data) => setLives(data))
    }, [])

   const livesList = lives.map((life => {
      return (<li className="state-card">
              <h3 key={life.id} life={life}>{life.state_name}</h3>
              <p>Life Expectancy: {life.life_expectancy}</p>
              </li>
            )              
    }))

  return (
    <div>
        <ol className='state-list'>
        {livesList}
        </ol>
    </div>
  )
}
