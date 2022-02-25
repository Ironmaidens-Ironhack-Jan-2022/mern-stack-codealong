import React from 'react'
import AddAppartmentForm from './AddForm'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export default function CreateApartment() {

  const navigate = useNavigate()

  const addNewApartment = async (event) => {
      event.preventDefault();
      try {
          const { title, pricePerDay, img } = event.target;

          let newApartment = {
              title: title.value,
              pricePerDay: pricePerDay.value,
              img: img.value
          }

          await axios.post("https://ironbnb-m3.herokuapp.com/apartments", newApartment)
          navigate("/")
      }
      catch(error) {
          console.log("Something went wrong while creating a new apartment", error)
      }
  }
  return (
    <div>
      <AddAppartmentForm addNewApartment={addNewApartment}/>
    </div>
  )
}
