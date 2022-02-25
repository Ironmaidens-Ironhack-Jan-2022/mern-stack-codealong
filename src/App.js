import './App.css';
import {Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from './components/HomePage';
import CreateApartment from './components/CreateApartment';
import ApartmentsList from './components/ApartmentsList';
import ApartmentsDetails from './components/ApartmentsDetails';


function App() {

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <NavBar/>
      <div style={{marginTop: "40px"}}>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/apartments" element={<ApartmentsList/>}></Route>
        <Route path="/apartments/:apartmentId" element={<ApartmentsDetails/>}></Route>
        <Route path="/apartments/create" element={<CreateApartment/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
