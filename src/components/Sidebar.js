import React from 'react'
import stl from './sidebar.module.css'
import {Link} from "react-router-dom"

function Sidebar() {
    return (
        <aside className={stl.sidebar}>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/dialogs">Messages</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </aside>
    )
}

export default Sidebar
