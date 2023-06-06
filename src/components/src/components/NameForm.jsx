import { useState } from "react";
import { nanoid } from "nanoid";

export default function NameForm({ contacts, setContacts }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const onChange = event => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);

        }
        if (name === "number") {
            setNumber(value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        const duplicateContact = contacts.find(
            contact => 
                contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
        {
            if (duplicateContact){
                alert('Duplicate contact');
            return;
        }
        const newContact = {
            id: nanoid(),
            name: name,
            number: number,
        };
        setContacts(previousState => [...previousState, newContact]);
        setName('');
        setNumber('');
        }
    }

    return (
        <div>
            <p>Name</p>
            <form onSubmit={handleSubmit}>
                <div className="{styles.inputContainer}">
                    <input
                type="text"
                name="name"
                pattern="^[a-zA-Z0-9\s'-]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                required
                value={name}
                onChange={onChange}
                />
            </div>
                <div className="{styles.inputContainer}">
                    <p>Number</p>
                    <input
                    type="text"
                    name="number"
                    pattern="^[a-zA-Z0-9\s'-]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    value={number}
                    onChange={onChange}
                    />
                    
                </div>
                <button type="submit">Add contact</button>
            </form>
        </div>
    )
}