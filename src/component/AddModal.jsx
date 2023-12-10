import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const AddModal = ({ show, name, setShow, setData, data }) => {
  
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: "4",
        patient: patientName,
        day: date,
        consulted: false,
        doctor: name,
      },
    ]);
    console.log(data)
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(!show)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a name"
                onChange={(e) => setPatientName(e.target.value)}
                id="patient"
                value={patientName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                id="day"
                value={date}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="success" onClick={() => setShow(false)}>
            Submit
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
