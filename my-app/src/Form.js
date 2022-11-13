import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulaire.css';

function Formulaire() {
  return (
    <div className= "formulaire2" >
    <Form className="formulaire2" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-3" >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="formumaire2"  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-3" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="formumaire2" />
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