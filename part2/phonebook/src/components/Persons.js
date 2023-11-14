import React from 'react'

const Persons = ({ contacts, filter }) =>
    <>
        {contacts.filter(
            contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map(contact => (
                <div key={contact.name}>{contact.name} {contact.number}</div>
            ))}
    </>

export default Persons