import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactList(props) {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    return (
        <div className="ui celled list" style={{marginTop:"5.5rem"}}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className='ui button blue right' style={{marginBottom:"2rem"}}>Add Contact</button>
            </Link>
            {props.contacts.map((item) => (
                <ContactCard
                contact={item}
                clickHandler={deleteContactHandler}
                key={item.id}
                />
            ))}
        </div>
    )
}

export default ContactList
