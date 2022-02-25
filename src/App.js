import './App.css';
import {Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from './components/HomePage';
import CreateApartment from './components/CreateApartment';
import ApartmentsList from './components/ApartmentsList';
import ApartmentsDetails from './components/ApartmentsDetails';
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((result) => {
        setApartments(result.data);
      })
      .catch();
  }, []);


  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/apartments" element={<ApartmentsList apartments={apartments}/>}></Route>
      <Route path="/apartments/:apartmentId" element={<ApartmentsDetails/>}></Route>
      <Route path="/apartments/create" element={<CreateApartment/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
