import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
        <NavLink
            to="/"
            exact
            activeStyle={{
                // color: "#4f6d7aff",
            }}
            className = "app-title"
            >
        State rankings
        </NavLink>
        <NavLink
            to="marijunalaws"
            exact
            activeStyle={{
                color: "#eaeaeaff",
                // background: "#4f6d7aff",
            }}
            className = "navTitles"
            >
        Weed Laws
        </NavLink>
         <NavLink
            to="temperature"
            exact
            activeStyle={{
                color: "#eaeaeaff",
                // background: "#4f6d7aff",
            }}
            className = "navTitles"
            >
        Average Temperature
        </NavLink>
         <NavLink
            to="livingcost"
            exact
            activeStyle={{
              color: "#eaeaeaff",
                // background: "#4f6d7aff",
            }}
            className = "navTitles"
            >
        Cost of Living
        </NavLink>
             <NavLink
            to="life"
            exact
            activeStyle={{
              color: "#eaeaeaff",
                // background: "#4f6d7aff",
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
