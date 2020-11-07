import React, { useState, useEffect, useRef } from 'react';


const NewTicketPage = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const hendleChange = e => {
    setInput(e.target.value);
  }
  const hendleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      
      // must be post to db;
      text: input

    });
    setInput('');
  }
  return (
    <div className='container'>
        <input
          type='text'
          name='text'
          onChange={hendleChange}
          placeholder='Title'
          className='title-input'
          ref={inputRef}
        />
        <button onClick={hendleSubmit} className='add-button'>Add Ticket</button>
    </div>
  )
}

export default NewTicketPage;