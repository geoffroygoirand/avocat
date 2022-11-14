import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulaire.css';
import {useState} from 'react'; 

function Formulaire() {
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState(""); 
  return (
    <div className= "formulaire2" >
    <Form className="formulaire2" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-3" >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="formumaire2" value ={email} onChange ={(e)=> setEmail(e.target.value)}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-3" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="formumaire2" value ={password} onChange ={(e)=> setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Formulaire;