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
      return (<li>
              <h3 key={temp.id} temp={temp}>{temp.state_name}</h3>
              <p>Temp scale {temp.temp_scale}</p>
              </li>
            )              
    }))

  return (
    <div>
        <ol>
        {tempList}
        </ol>
    </div>
  )
}
