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
      return (<div className="state-card">
              <h3><span className="state-rank" key={life.id}>{life.id}.</span> {life.state_name}</h3>
              <p>Life Expectancy: {life.life_expectancy}</p>
              </div>
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
