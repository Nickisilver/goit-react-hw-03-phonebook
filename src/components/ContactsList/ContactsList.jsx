import css from './ContactsList.module.css';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

export const ContactsList = ({ title, contacts, deleteContact }) => {
  return (
    <div className={css.ContactsListWrapper}>
      <h2 className={css.ContactsFormTitle}>{title}</h2>
      <ul className={css.ContactsList}>
        {contacts.map(contact => (
          <ContactsListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </ul>
    </div>
  )
}

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteContact: PropTypes.func.isRequired,
}