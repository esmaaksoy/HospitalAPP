import Doktors from "./component/Doktors";
import Appoinment from "./component/Appoinment";
import {appointmentData} from "./helper/data";
import {doctorData} from "./helper/data";
import { FaUserDoctor } from "react-icons/fa6";
function App() {
  return (
    <>
      <header>
      <h1>HOSPITAL <FaUserDoctor className="text-primary"/></h1>
    
      </header>
      <main>
        <Doktors doctorData={doctorData}/>
        <Appoinment appointmentData={appointmentData}/>
      </main>
    </>
  );
}

export default App;
