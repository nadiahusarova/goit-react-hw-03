import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ data, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      {data.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
          id={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactList;