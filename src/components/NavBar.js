import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/apartments">Apartments</Link></p>
    <p><Link to="/apartments/create">Create</Link></p>
    </div>
  )
}
