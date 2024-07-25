import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem("contact"));

    return (
      data ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (value) => {
    setSearchName(value);
  };

  const filtredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const addContact = (data) => {
    const newContact = { id: nanoid(), ...data };
    setContacts((prevContact) => [...prevContact, newContact]);
  };

  const deletContact = (id) =>
    setContacts((prevContact) =>
      prevContact.filter((contact) => contact.id !== id)
    );
  return (
    <div className={s.wrap}>
      <h1 className={s.style}>Phonebook</h1>

      <ContactForm onSubmit={addContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList data={filtredContact} handleDelete={deletContact} />
    </div>
  );
};

export default App;
