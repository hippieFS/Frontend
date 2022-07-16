import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from './Card.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import food from "../assets/food.jpg";

import "./Navbarapp.css";

function Navbarapp() {
  const recipeAuthor = "Varoon";
  const recipeItem = {
    title: "Takobell",
    date: "8 July, 2022",
    image: food,
    description:
      "Me like tacos.Tacos good. They are great. They are nice. Eat tacos. ",
  };
  
  const like= 193;
  const isLiked = true;

  return (
   <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Explore</Nav.Link>
            <Nav.Link href="#profile">Trending</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Container>
      </Navbar>
     <Container>
      <Row className="rowone">
        <Col md={{ span: 7, offset: 4 }}>
      <Card author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}/>
          </Col>
          </Row>

          <Row className="rowtwo">
        <Col md={{ span: 7, offset: 4 }}>
      <Card author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}/>
          </Col>
          </Row>

      </Container>
      </div>
      
  );
}

export default Navbarapp;