import Card from 'react-bootstrap/Card';
import AddModal from './AddModal';
import { useState } from "react";
const CardDoktor = ({name,img,dep,setData,data}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={img} onClick={()=>setShow(!show)}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {dep}
        </Card.Text>
      </Card.Body>
    </Card>
    <AddModal name={name} show={show} setShow={setShow} setData={setData} data={data} />
    </div>
  );
}

export default CardDoktor
