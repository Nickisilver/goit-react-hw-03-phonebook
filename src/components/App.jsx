import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'

import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  AddContact = data => {
    const {contacts} = this.state
    console.log(data);
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState({contacts:[{id: nanoid(), name:data.name, number: data.number}, ...this.state.contacts]})
  };

  onFilterChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  filteredContacts = () => {
    const {filter, contacts} = this.state
    const normalizeFilter = filter.toLocaleLowerCase()
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter))
  }

  deleteContact = id => {
   
this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  render() {
 
    return (
      <div className={css.mainWrapper}
   
      >
        <ContactsForm
          title="Phonebook"
          button="Add Contact"
          onSubmit={this.AddContact}
        />
        <Filter filter={this.state.filter} onFilterChange={this.onFilterChange} />
        <ContactsList title='Contacts' contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
