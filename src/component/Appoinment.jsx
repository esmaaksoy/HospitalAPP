import { FaTimesCircle } from "react-icons/fa";
import { appointmentData } from "../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Consulted from "./Consulted";

const Appoinment = ({ data, handleData }) => {
  const { patientName, dayTime } = data;

  return (
    <div>
      <h3 className="text-center">Appointment List</h3>
      <Container>
        <Row>
          {appointmentData.map(({ patient, day, doctor, id, consulted }) => {
            const formatedDay = day.toLocaleDateString();

            return (
              <div
                key={id}
                className="d-flex justify-content-between bg-primary-subtle g-3 rounded-2 align-items-center p-2"
              >
                {console.log(day)}
                <div>
                  <h5>{doctor}</h5>
                  <h5>{patient}</h5>
                  <h5>{formatedDay}</h5>
                </div>
                {consulted ? <Consulted /> : <div>tarih</div>}
                <div>
                  <FaTimesCircle className="display-6 text-dark" />
                </div>
              </div>
            );
          })}
        </Row>
        <Row>
          <div className="d-flex justify-content-between bg-primary-subtle g-3 rounded-2 align-items-center  p-2">
            <h5>{patientName}</h5>
            <div>
              <h5>{dayTime}</h5>
            </div>
            <div>
              <FaTimesCircle className="display-6 text-dark" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Appoinment;
