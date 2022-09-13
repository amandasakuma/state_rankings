import React from 'react'
import RankingsCategories from './RankingsCategories';
// import PrefCategories from './PrefCategories';

export default function Header() {
  
return (
    <div className="header">
      {/* <div className="header-buttons">

        <p className="rankings-categories" >
          State rankings
        </p>

        <p className="pref-categories">
          <PrefCategories />
        </p>

      </div> */}
      <div className="category-container">
        <RankingsCategories />
      </div>
    </div>
  )
}
