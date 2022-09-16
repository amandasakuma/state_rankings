import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
        <NavLink
            to="marijunalaws"
            exact
            activeStyle={{
                // background: "#4f6d7aff",

                padding: "5px",
            }}
            className = "navTitles"
            >
        Weed Laws
        </NavLink>
         <NavLink
            to="temperature"
            exact
            activeStyle={{
                // background: "#4f6d7aff",
                padding: "5px",
            }}
            className = "navTitles"
            >
        Average Temperature
        </NavLink>
         <NavLink
            to="livingcost"
            exact
            activeStyle={{
                // background: "#4f6d7aff",
                padding: "5px",
            }}
            className = "navTitles"
            >
        Cost of Living
        </NavLink>
             <NavLink
            to="life"
            exact
            activeStyle={{
                // background: "#4f6d7aff",
                padding: "5px",
            }}
            className = "navTitles"
            >
        Life Expectancy
        </NavLink>
          <NavLink
            to="notes"
            exact
            // activeStyle={{
            //     background: "#FFDA7A",
            //     padding: "5px",
            // }}
            className = "notes-nav"
            >
        Notes
        </NavLink>
    </div>
  )
}
