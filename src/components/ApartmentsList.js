import React from 'react'
import {Link} from "react-router-dom"


export default function ApartmentsList({apartments}) {

  // if (apartments.length == 0){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
    {apartments.map((apartment)=>{
      return (
        <div key={apartment._id}>
          <Link to={apartment._id}>{apartment.title}</Link>
          {/* <img src={apartment.img}></img> */}
        </div>
      )
    })}
    </div>
  )
}
