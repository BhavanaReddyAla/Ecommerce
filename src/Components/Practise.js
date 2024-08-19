import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicExample from "../TestPage";
import { useLocation, useSearchParams, useParams } from "react-router-dom";
import { CardTitle } from "react-bootstrap";

function Practise() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("id"));
  const location = useLocation()
  console.log(location)

  return <h2> card Title is {location.state.id} </h2>;
}

export default Practise;
