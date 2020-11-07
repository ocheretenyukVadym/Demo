import React, { useState } from 'react';
import './NewTicketPage.css'

const NewTicketPage = (props) => {
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
      props.createNewTicket(input)
      setInput('');
  }
  return (
    <div className='container'>
        <input
          value={input}
          type='text'
          onChange={e => handleChange(e)}
          placeholder='Title'
          className='title-input'
        />
        <button onClick={handleSubmit} className='add-button'>Add Ticket</button>
    </div>
  )
}

export default NewTicketPage;