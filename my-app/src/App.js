import logo from './logo.svg';
import './App.css';
import NavbarSite from './Nav.js'; 
import Formulaire from './Form.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import avocat from './avocat.jpg'
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Dossiers from "./Dossiers.js"


function App() {
  return (
  
      <div className="App">
     
      <Routes>
          <Route path ="/" element= {<Home />} />
          <Route path ="/Dossiers" element= {<Dossiers />} />
      </Routes>
        
    </div>
  );
}

export default App;
