import React, {useState} from 'react';

const NewUserPage = ({ createNewUser }) => {
    const [name, setName] = useState("");
    const submitHandler = (name) => {
        createNewUser(name);
        setName("");
    }

    return(
        <div className="new-user-form">
            <input type="text" placeholder="Username" value={name} onChange={e => setName(e.target.value)}/>
            <input type="submit" value="Submit" onClick={() => submitHandler(name)}/>
        </div>
    )
}

export default NewUserPage;