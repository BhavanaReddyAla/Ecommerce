import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import Practise from "./Components/Practise";
import { useNavigate, createSearchParams, Link } from "react-router-dom";
import { useState } from "react";

const cardImg = [
  "https://wallpapers.com/images/hd/x-men-movie-logan-4rya331hq6qtqaxh.jpg",
  "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
  "https://cdn.marvel.com/content/1x/036dpl_com_cut_dsk_02_0.jpg",
  "https://i.pinimg.com/originals/50/15/10/5015103ad1e042f6ad84bdb709487f3f.jpg",
  "https://i.pinimg.com/originals/35/77/d3/3577d32b5fb998cb49fbb8e792006e30.jpg",
];
const cardItems = [
  {
    cardImage:
      "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
    cardTitle: "Dead Pool1",
    cardBody: "DeadPool body text",
    cardFooter: "Deadpool footer text",
    path: "/newpage",
  },
  {
    cardImage:
      "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
    cardTitle: "Dead Pool2",
    cardBody: "DeadPool body text",
    cardFooter: "Deadpool footer text",
  },
  {
    cardImage:
      "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
    cardTitle: "Dead Pool3",
    cardBody: "DeadPool body text",
    cardFooter: "Deadpool footer text",
  },
  {
    cardImage:
      "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
    cardTitle: "Dead Pool4",
    cardBody: "DeadPool body text",
    cardFooter: "Deadpool footer text",
  },
  {
    cardImage:
      "https://deadline.com/wp-content/uploads/2022/11/deadpool-ryan-reynolds.jpg?w=500",
    cardTitle: "Dead Pool5",
    cardBody: "DeadPool body text",
    cardFooter: "Deadpool footer text",
  },
];
function BasicExample() {
  const cardalert = (value) => {
    // alert(value.cardTitle);
  };
  const navigate = useNavigate();

  const openCardPage = (item) => {
    navigate({
      pathname: "/newpage",
    search: createSearchParams({
      id: item.cardTitle,
    }).toString()
  })
  };

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
      <div>
        <Carousel
          data-bs-theme="dark"
          className="d-block w-100 mb-3"
          height="90vh"
        >
          <Carousel.Item interval={3000}>
            <img
              style={{ height: "90vh" }}
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
              style={{ height: "90vh" }}
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
              style={{ height: "90vh" }}
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
      </div>
      <div>
        <h2 className="text-start m-5">List of cards</h2>
      </div>
      {/* --------------------------card-start----------------- */}
      <div className="m-5">
        <CardGroup className="d-flex flex-wrap align-content-start justify-content-between">
          {cardImg.map((card, i) => {
            return (
              <Card className="p-3">
                <Card.Img variant="top" src={card} />
              </Card>
            );
          })}
        </CardGroup>
      </div>
      {/* --------------------------card-end----------------- */}

      <div>
        <h2 className="text-start m-5">List of cards with image and title</h2>
      </div>
      {/* --------------------------card-text-start----------------- */}
      <div className="m-5">
        <CardGroup>
          {cardItems.map((card, i) => {
            return (
              <Card className="p-3" onClick={() => cardalert(card)}>
                <Card.Img variant="top" src={card.cardImage} />
                <Card.Body>
                  <Card.Title>{card.cardTitle}</Card.Title>
                  <Card.Text>{card.cardBody}</Card.Text>
                  <button onClick={() => openCardPage(card)}>Click Me</button>
                  {/* <a href={card?.path}>Click here</a> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{card.cardFooter}</small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}
export default BasicExample;
