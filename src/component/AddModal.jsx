import React from 'react'

const AddModal = ({name}) => {
    
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Appointmen for {name}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Patient Name</label>
              <input type="text" className="form-control" id="recipient-name" placeholder='Enter your name'/>
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Day & Time</label>
              <div className='d-flex'>
              <input type='date' className="form-control" id="message-text"/>
              <input type='time' className="form-control" id="message-text"/>
              </div>
              
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
          <button type="button" className="btn btn-primary">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddModal

