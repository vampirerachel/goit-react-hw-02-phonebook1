import { useState } from "react";
import ContactList from "./ContactList"
import NameForm from "./NameForm";

export default const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <NameForm setContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} />
    </div>
  )
}