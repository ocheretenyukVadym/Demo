import React, {useState} from 'react';
import './NewUserPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Modal/ShowModal';



const NewUserPage = ({ createNewUser }) => {
    const [name, setName] = useState("");
    const submitHandler = (name) => {
        createNewUser(name);
        setName("");
    }
    return(
      <App submitHandler = {submitHandler}
      createNewUser = {createNewUser}
      setName = {setName}
      name = {name}
      />
      
    )
  }

export default NewUserPage;