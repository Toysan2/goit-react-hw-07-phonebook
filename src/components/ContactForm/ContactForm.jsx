import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/store';
import './ContactForm.css';

const { addContactAsync } = actions;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // Updated from 'number' to 'phone'
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value); // Updated from 'number' to 'phone'
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContactAsync({ name, phone })); // Updated the key to 'phone'
    setName('');
    setPhone(''); // Updated from 'number' to 'phone'
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Phone {/* Updated label from 'Number' to 'Phone' */}
        <input
          type="text"
          name="phone" // Updated from 'number' to 'phone'
          value={phone}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
