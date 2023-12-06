import Doktors from "./component/Doktors";
import Appoinment from "./component/Appoinment";
import {appointmentData} from "./helper/data";
import {doctorData} from "./helper/data";
function App() {
  return (
    <>
      <header>
      <h1>HOSPITAL</h1>
    
      </header>
      <main>
        <Doktors doctorData={doctorData}/>
        <Appoinment appointmentData={appointmentData}/>
      </main>
    </>
  );
}

export default App;
