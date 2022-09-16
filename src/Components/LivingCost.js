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
      return (<div className="state-card">
              <h3><span className="state-rank" key={col.id}>{col.id}.</span> {col.state_name}</h3>
              <p>Cost of Living Index: {col.cost_index}</p>
              <p>Grocery Costs: {col.grocery_cost}</p>
              <p>Housing Costs: {col.housing_cost}</p>
              <p>Utilities Costs: {col.utilities_cost}</p>
              <p>Transportation Costs: {col.transportation_cost}</p>
              <p>Miscellaneous Costs: {col.misc_cost}</p>
              </div>
            )              
    }))

  return (
    <div >
        <ol className='state-list'>
        {colList}
        </ol>
    </div>
  )
}
