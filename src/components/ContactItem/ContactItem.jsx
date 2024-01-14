import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.css'

const ContactItem = ({ contact, onDelete }) => (
  <div className="contact-item">
    <li>
      {contact.name}: {contact.phone}
      <button className="button-del" onClick={onDelete}>Delete</button>
    </li>
  </div>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
