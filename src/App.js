import Doktors from "./component/Doktors";
import Appoinment from "./component/Appoinment";
import { useState } from "react";
import { appointmentData } from "./helper/data";
function App() {

  const [data, setData] = useState(appointmentData);
 
  return (
    <div className="p-2">
      <h1 className="text-center">Hospital Doctors</h1>
      <Doktors setData={setData} data={data}/>
      <Appoinment setData={setData} data={data} />
    </div>
  );
}

export default App;
