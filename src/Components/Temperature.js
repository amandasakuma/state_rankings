import React from 'react'
import { useEffect, useState } from 'react';

export default function Temperature() {
      const [temps, setTemp] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/temperatures")
      .then((r) => r.json())
      .then((data) => setTemp(data))
    }, [])

   const tempList = temps.map((temp => {
      return (<div className="state-card">
              <h2>{temp.ranking}. </h2>
              <h3>{temp.state_name}</h3>
              <p>Average Temperature: {temp.temperature}°F</p>
              <p>Temp Scale: {temp.temp_scale}</p>
              </div>
            )              
    }))

  return (
    <div>
        <ol className='state-list'>
        {tempList}
        </ol>
    </div>
  )
}
