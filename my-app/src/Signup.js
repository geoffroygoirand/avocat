import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulaire.css';
import {useState} from 'react'; 

function SignUp() {
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState(""); 
 const [signupUserName, setSignupUserName] = useState("");
 const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
 const [signupAddress, setSignupAddress] = useState("");
 const [signupFirstName, setSignupFirstName] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 var handleSubmitSignUp = async () => {
    var res = await fetch("http://172.16.189.14:3000/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${signupEmail}&pwd=${signupPwd}&username=${signupUserName}&phonenumber=${signupPhoneNumber}&address=${signupAddress}`,
    });
    res = await res.json();
    if (res.isLogin) {
    } else {
      setErrorMessage(res.errorMessage);
     
    }
  };
  
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-3" >User Name</Form.Label>
        <Form.Control type="password" placeholder="Password" className="formumaire2" value ={password} onChange ={(e)=> setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-3" >Phone Number</Form.Label>
        <Form.Control type="password" placeholder="Password" className="formumaire2" value ={password} onChange ={(e)=> setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-3" >Addresse</Form.Label>
        <Form.Control type="password" placeholder="Password" className="formumaire2" value ={password} onChange ={(e)=> setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onPress={handleSubmitSignUp}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default SignUp;