import { doctorData } from "../helper/data";
import CardDoktor from "./CardDoktor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doktors = ({handleData}) => {
 
  return (
    <Container className="p-2">
      <h2 className="text-center">Our Doctors</h2>
      <Row className="g-3">
        {doctorData.map((item,index) => (
          <Col key={index}>
            <CardDoktor {...item} handleData={handleData}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doktors;
