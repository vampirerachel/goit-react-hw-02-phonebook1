import { useState } from "react";
import ContactList from "./ContactList"
import NameForm from "./NameForm";
import Filter from "./Filter";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(Number(filter))
  );
  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <h2>
      Phonebook
      </h2>
      <NameForm setContacts={setContacts} contacts={contacts} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList filteredContacts={filteredContacts}
        handleDelete={handleDelete} />
      
    </div>
  )
}