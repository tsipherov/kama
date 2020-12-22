import React from 'react'
import { NavLink } from 'react-router-dom'


const Frend = ({ id, name}) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + id}>{ name }</NavLink>
        </div>
    )
}

export default Frend
