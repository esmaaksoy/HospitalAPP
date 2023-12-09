
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const AddModal = ({show,name,setShow}) => {
    console.log(show)
  return (
    <div>
      <Modal show={show} onHide={()=>setShow(!show)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title >{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(!show)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>setShow(!show)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;

