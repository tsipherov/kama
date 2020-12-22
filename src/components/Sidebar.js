import React from 'react'
import stl from './sidebar.module.css'
import {NavLink} from "react-router-dom"

function Sidebar() {
    return (
        <aside className={stl.sidebar}>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={stl.selected}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={stl.selected}>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={stl.selected}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={stl.selected}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={stl.selected}>Settings</NavLink>
          </li>
        </ul>
      </aside>
    )
}

export default Sidebar
