import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";

function BasicExample() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Sign in</Navbar.Text>
            <Image src={logo} roundedCircle width="50" height="50" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel data-bs-theme="dark" className="d-block w-100 mb-3">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2 className="text-start" >List of cards</h2>
        <CardGroup>
          <Card style={{ width: "15rem" }} className="mx-3">
            <Card.Img 
              variant="top"
              src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            />
          </Card>
          <Card style={{ width: "15rem" }} className="mx-2">
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            />
          </Card>
          <Card style={{ width: "15rem" }} className="mx-2">
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            />
          </Card>
          <Card style={{ width: "15rem" }} className="mx-2">
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/demo/basketball_shot.jpg"
            />
          </Card>
        </CardGroup>
      </div>
    </div>  
  );
}
export default BasicExample;
