import React, { useState } from 'react';

const Form = ({ defaultMessage, onSubmit }) => {
  const [message, setMessage] = useState(defaultMessage);

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(message);
    setMessage('');
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="todo__block">
        <input
          type="text"
          placeholder="Your message"
          className="msgInput"
          value={message}
          onChange={onMessageChange}
        />
        <button id="msgButton">Add todo</button>
      </div>
    </form>
  );
};

export default Form;
