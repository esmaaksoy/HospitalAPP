import { FaTimesCircle } from "react-icons/fa";
import {appointmentData} from "../helper/data"
const Appoinment = ({ data, handleData }) => {
  const { patientName, dayTime } = data;
  return (
    <div>
    {appointmentData.map(({patient,day,doctor,id})=>(
        <div>
        <div>
          <h5>{doctor}</h5>
          <h5>{patientName}</h5>
        </div>
        <div>
          <h5>{dayTime}</h5>
          </div>
          <div>
          <FaTimesCircle /> 
          </div>
      </div>
    ))}
   </div>
  );
};

export default Appoinment;
