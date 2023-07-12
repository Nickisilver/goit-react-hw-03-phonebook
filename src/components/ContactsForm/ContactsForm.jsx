import { Component } from 'react';
import css from './ContactsForm.module.css';
import PropTypes from 'prop-types';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

this.props.onSubmit(this.state)
    this.resetForm()
  };

  resetForm = () => {
    this.setState({
    name: '',
    number: '',
    })
  }

  render() {
    const { name, number } = this.state;
    const { title, button } = this.props;

    return (
      <div className={css.ContactsFormWrapper}>
        <h2 className={css.ContactsFormTitle}>{title}</h2>
        <form className={css.ContactsForm}
        onSubmit={this.handleSubmitForm}>
          <label>
            <p className={css.ContactsFormInpText}> Name</p>
            <input
              onChange={this.handleInputChange}
              placeholder='Enter your name '
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            <p className={css.ContactsFormInpText}>Number</p>
            <input
              onChange={this.handleInputChange}
              value={number}
               placeholder='Enter your phone number '
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <p className={css.BtnWrapper}>
            <button className={css.BtnAdd} type='submit'>{button}</button>
          </p>
        </form>
      </div>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};