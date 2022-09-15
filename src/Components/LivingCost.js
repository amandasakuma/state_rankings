import React from 'react'
import { useEffect, useState } from 'react';

export default function LivingCost() {
      const [cols, setCols] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/living_costs")
      .then((r) => r.json())
      .then((data) => setCols(data))
    }, [])

   const colList = cols.map((col => {
      return (<li>
              <h3 key={col.id} col={col}>{col.state_name}</h3>
              <p>Cost of Living index: {col.cost_index}</p>
              </li>
            )              
    }))

  return (
    <div>
        <ol>
        {colList}
        </ol>
    </div>
  )
}
