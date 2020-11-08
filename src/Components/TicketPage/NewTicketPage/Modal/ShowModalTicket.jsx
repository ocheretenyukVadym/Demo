import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModalTicket from './MyVerticallyCenteredModalTicket';




  function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Tikcet
        </Button>
  
        <MyVerticallyCenteredModalTicket
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }


  export default App;