import React from 'react'
import RankingsCategories from './RankingsCategories';
// import PrefCategories from './PrefCategories';

export default function Header() {
  
return (
    <div className="header">
      <div className="category-container">
        <RankingsCategories />
      </div>
    </div>
  )
}
