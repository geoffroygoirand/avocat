mport logo from './logo.svg';
import './App.css';
import NavbarSite from './Nav.js'; 
import  SignUp from './SignUp.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import avocat from './avocat.jpg'




function PageSignup() {
  return (
  
      <div className="App">
      
      <NavbarSite />
    
     
      <Signup />
        
    </div>
  );
}

export default PageSignup;
