import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="new-user-form">
              <input className='name-inp' type="text" placeholder="Username" value={props.name} onChange={e => props.setName(e.target.value)}/>
             <input className='add-user-button' type="submit" value="Submit" onClick={() => props.submitHandler(props.name)}/>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;