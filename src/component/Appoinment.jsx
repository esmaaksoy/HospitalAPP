import { FaTimesCircle } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Consulted from "./Consulted";

const Appoinment = ({ data, setData }) => {
const handleDelete=(e)=>{
  setData(data.filter((item)=>item.id !== e ))
}

  return (
    <div>
      <h3 className="text-center">Appointment List</h3>
      <Container>
        <Row>
          {data.map(({ patient, day, doctor, id, consulted }) => {
         
            return (
              <div
                key={id}
                className="d-flex justify-content-between bg-primary-subtle g-3 rounded-2 align-items-center p-2"
              >
                <div>
                  <h5>{doctor}</h5>
                  <h5>{patient}</h5>
                </div>
                {consulted ? <Consulted /> : <div> <h5>{day}</h5></div>}
                <div>
                  <FaTimesCircle className="display-6 text-dark" onClick={()=>handleDelete(id)}/>
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
