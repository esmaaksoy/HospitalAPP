
import Doktors from "./component/Doktors"
import Appoinment from "./component/Appoinment"
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    patientName: "",
    dayTime: "",
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  
  return (
    <div>
      <Doktors handleData={handleData}  />
      <Appoinment handleData={handleData} data={data}  />
    </div>
  );
}

export default App;
