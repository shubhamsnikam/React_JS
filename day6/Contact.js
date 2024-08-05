import React from 'react';

const Contact = ({ contacts }) => {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
