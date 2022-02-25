import React from 'react'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"


export default function ApartmentsList() {


  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((result) => {
        setApartments(result.data);
      })
      .catch();
  }, []);

  if (apartments.length == 0){
    return <h1>Loading...</h1>
  }

  return (
    <div>
    {apartments.map((apartment)=>{
      return (
        <div key={apartment._id} style={{width: "200px"}}>
          <div>
            <p><Link to={apartment._id}>{apartment.title}</Link></p>
            <img src={apartment.img} alt="apartment" style={{width: "100px"}}></img>
          </div>
        </div>
      )
    })}
    </div>
  )
}
