import { FaTimesCircle } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Consulted from "./Consulted";

const Appoinment = ({ data, handleData }) => {

  return (
    <div>
      <h3 className="text-center">Appointment List</h3>
      <Container>
        <Row>
          {data.map(({ patient, day, doctor, id, consulted }) => {
            const formattedDay = day.toLocaleDateString();
            return (
              <div
                key={id}
                className="d-flex justify-content-between bg-primary-subtle g-3 rounded-2 align-items-center p-2"
              >
                <div>
                  <h5>{doctor}</h5>
                  <h5>{patient}</h5>
                 
                </div>
                {consulted ? <Consulted /> : <div> <h5>{formattedDay}</h5></div>}
                <div>
                  <FaTimesCircle className="display-6 text-dark" />
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Appoinment;
