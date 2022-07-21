import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Uploadimage from '../Uploadimage';
import Navbarapp from '../Navbar/Navbarapp';

import './CreateProfile.css'

function BasicExample() { 
  return (
   
   <Row className="rowone">
   <Col md={{ span: 5, offset: 1 }}>
   <Container>
   <h1 className='headingone'>Enter your details!</h1>
    <Form>
     <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>

     <InputGroup className="mb-3">
       <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
       <Form.Control
         placeholder="Username"
         aria-label="Username"
         aria-describedby="basic-addon1"
       />
     </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </Col>

    <Col md = {{offset:1}}>
 <Uploadimage/>
    </Col>

   </Row>
  );
}

export default BasicExample;