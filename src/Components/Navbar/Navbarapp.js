import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from '../Card/Card.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import food from "../../assets/food.jpg";

import "./Navbarapp.css";

import hippo from '../../assets/hippo.png';
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbarapp() {
  const recipeAuthor = "Varoon";
  const recipeItem = {
    title: "Takobell",
    date: "8 July, 2022",
    image: food,
    description:
      "Me like tacos.Tacos good. They are great. They are nice. Eat tacos. ",
  };

  const like = 193;
  const isLiked = true;

  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
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
      </Navbar> */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={hippo} height="30px"></img></Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className='searchbtn'><FiSearch /></Button>
            </Form>
            <Nav.Link href="#home" className='page'><AiFillHome size={30} /></Nav.Link>
            <Nav.Link href="#features" className='page'><MdExplore size={30} /></Nav.Link>
            <Nav.Link href="#message" className='page'><AiFillMessage size={30} /></Nav.Link>
            <Nav.Link href="#profile" className='profile-icon'><CgProfile size={30} /></Nav.Link>
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
              likeCount={like} />
          </Col>
        </Row>

        <Row className="rowtwo">
          <Col md={{ span: 7, offset: 4 }}>
            <Card author={recipeAuthor}
              title={recipeItem.title}
              date={recipeItem.date}
              description={recipeItem.description}
              liked={isLiked}
              likeCount={like} />
          </Col>
        </Row>

      </Container>
    </div>

  );
}

export default Navbarapp;