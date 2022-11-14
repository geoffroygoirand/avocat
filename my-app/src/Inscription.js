import logo from './logo.svg';
import './App.css';
import NavbarSite from './Nav.js'; 
import Formulaire from './Form.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import avocat from './avocat.jpg'




function Inscription() {
  return (
  
      <div className="App">
      
      <NavbarSite />
      <div className="Container">
      <img src={avocat} alt="avocat" />
      </div>
      <Formulaire />
        
    </div>
  );
}

export default Inscription;