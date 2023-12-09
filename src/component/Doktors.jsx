import { doctorData } from "../helper/data";
import CardDoktor from "./CardDoktor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Doktors = () => {
  return (
    <Container>
      <Row className="g-3">
        {doctorData.map((item) => (
          <Col>
            <CardDoktor {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doktors;
