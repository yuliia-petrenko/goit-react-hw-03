import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import contactSp from "./data/contactSp.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
   
    } else return contactSp;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactsNew = (newContact) => {
    const finalNewContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalNewContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContactsNew} />
      <SearchBox inputValue={filter} onFilter={setFilter} />
      <ContactList
        contactsArray={visibleContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;