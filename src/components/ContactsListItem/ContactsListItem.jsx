import css from './ContactsListItem.module.css';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ contact, deleteContact }) => {
  const name = contact.name
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
  return (
    <li className={css.ContactsListItem}>
      <div className={css.contentWrapper}>
        <div className={css.contactDesc}>
          <span>{name}</span>: <span>{contact.number}</span>
        </div>
        <button
          className={css.deleteBtn}
          type="button"
          id={contact.id}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
