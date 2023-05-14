import "./style.module.css"
import { useState, useRef } from "react"
import { useId } from 'react';


export default function Phonebook() {
    const id = useId();
    const nameRef = useRef();
    const [contacts, setContact] = useState([])

    function handleChange(event) {
        event.preventDefault();
        let name = nameRef.current.value;
        setContact(prev => {
            return { ...prev, name };
        })
    nameRef.current.value = ""; // clear the input field
}

return (
<div>
<h1>Phonebook</h1>
<form onSubmit={handleChange}>
<label htmlFor={id}>Name:</label>
            <input
ref ={nameRef}
type="text"
name={id}
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
required
placeholder="          type name here"
/>
<button type="submit">Add Contact</button>
        </form>
        {contacts.length > 0 ? (
        <ul>
        {contacts.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>) : (
        <p>No contacts added yet.</p>
    )}
    </div>
);
}





