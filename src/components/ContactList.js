import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
    return (
      <ul>
        {contacts.map(({ id, name, number }, idx) => (
          <li key={id}>
            <div>{idx + 1}</div>
            {name}: {number}
            <button onClick={() => onDelete(id)}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ContactList;
  
  ContactList.propeTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
  };
  