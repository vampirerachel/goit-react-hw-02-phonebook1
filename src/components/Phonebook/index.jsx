import styles from "./style.module.css";
import React, { useState, useRef } from "react";
import { useId } from 'react';

export default function Phonebook() {
    const id = useId();
    const nameRef = useRef();
    const phoneRef = useRef();
    const [contacts, setContacts] = useState([]);

    function handleChange(event) {
        event.preventDefault();
        let name = nameRef.current.value;
        let number = phoneRef.current.value;
        setContacts(prev => [...prev, { name, number }]);
        nameRef.current.value = "";
        phoneRef.current.value = "";
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={handleChange}>
                <label htmlFor={id}>Name:</label>
                <input
                    ref={nameRef}
                    type="text"
                    name={id}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    placeholder="Type name here"
                />
                <input
                    ref={phoneRef}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Type phone number here"
                />
                <button type="submit">Add Contact</button>
            </form>
            <div className={styles.contacts}>
                {contacts.length > 0 ? (
                    <ul>
                        {contacts.map((contact, index) => (
                            <li className={styles.item} key={index}>
                                {contact.name}: {contact.number}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No contacts added yet.</p>
                )}
            </div>
        </div>
    );
}






