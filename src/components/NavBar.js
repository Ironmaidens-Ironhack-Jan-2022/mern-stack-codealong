import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <span><Link to="/"> Home </Link></span>
      <span><Link to="/apartments"> Apartments </Link></span>
      <span><Link to="/apartments/create"> Create </Link></span>
    </div>
  )
}
