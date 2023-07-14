import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'

import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if(this.state.contacts){


      this.setState({contacts:parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState){
   
    if(prevState.contacts !== this.state.contacts){
      console.log(this.state.contacts);

      localStorage.setItem( 'contacts', JSON.stringify(this.state.contacts))
    }
  }

  AddContact = data => {
    const {contacts} = this.state
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
    const feltedContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter))
    const sortedContact = feltedContacts.sort((a, b) => a.name.localeCompare(b.name))
    return sortedContact
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
