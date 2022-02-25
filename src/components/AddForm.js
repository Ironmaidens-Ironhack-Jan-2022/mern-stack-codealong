import React from 'react'

export default function AddAppartmentForm(props) {

    const {addNewApartment} = props

    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
        <form onSubmit={addNewApartment}>
          <label>Title</label>
          <br/>
          <input name='title' type="text"/>
          <br/>
          <label>Price per day</label>
          <br/>
          <input name='pricePerDay' type="text" />
          <br/>
          <label>Image</label>
          <br/>
          <input name='img' type="text" />
          <br/>
          <button style={{margin: "10px 25px", backgroundColor: "#86c4db", borderRadius: "10px"}}>Add new apartment</button>
        </form>
      </div>
    )
}