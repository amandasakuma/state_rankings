import React from 'react'
import { useEffect, useState } from 'react';

export default function WeedLaws() {
      const [weeds, setWeed] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/legal_weed")
      .then((r) => r.json())
      .then((data) => setWeed(data))
    }, [])

   const weedList = weeds.map((weed => {
      return (<div className="state-card">
                <h3><span className="state-rank"></span> {weed.state_name}</h3>
                <p>Legal Weed status: {weed.legal_weed_status}</p>
                <p>Medical marijuana?: {weed.medicinal_weed_status ? "Yes" : "No"}</p>
                <p>Weed decriminalized?: {weed.decriminalized_weed_status ? "Yes" : "No"}</p>
              </div>
            )              
    }))

  return (
    <div>
        <ul className='state-list'>
        {weedList}
        </ul>
    </div>
  )
}
