import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"

export default function ApartmentsDetails() {

  const { apartmentId } = useParams();
  console.log(apartmentId)
  const [apartment, setApartment] = useState(null)

  useEffect(() => {
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
      .then((result) => {
        setApartment(result.data);
      })
      .catch();
  }, [apartmentId]);

  if (!apartment){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <p>{apartment.title}</p>
      <p>{apartment.pricePerDay}</p>
      <img src={apartment.img} alt="apartment" style={{width: "300px"}}></img>
    </div>
  )
}
