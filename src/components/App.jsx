import Phonebook from "./Phonebook/index";
import React, { useState, useRef } from "react";
import { useId } from 'react';


export default App = () => {

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
      <Phonebook>
        
</Phonebook>
    </div>
  );
};
