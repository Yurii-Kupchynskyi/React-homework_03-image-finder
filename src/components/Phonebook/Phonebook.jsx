import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { FlexBox } from 'components/Box';
import { StatHeader } from 'components/Feedback/StatSection';
import ContactList from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { PhonebookOptions } from './PhonebookOptions';

const initialObject = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
];

export default class Phonebook extends Component {
  state = {
    contacts: [...initialObject],
    filteredContacts: [...initialObject],
    name: '',
    number: '',
    filter: '',
  };

  resetfilter = data => {
    this.setState({ filteredContacts: data });
    this.setState({ contacts: data });
    this.setState({ filter: `` });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    console.log(value);

    this.setState({ [name]: value });
  };

  handleFilter = evt => {
    this.handleChange(evt);
    const { value } = evt.target;
    const { contacts } = this.state;
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ filteredContacts: filteredArray });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    if (contacts.find((element, index) => element.name === name)) {
      Swal.fire({
        title: 'Error!',
        text: 'The name already exists',
        icon: 'error',
      });
      return;
    }

    contacts.push({
      id: nanoid(),
      name: name,
      number: number,
    });

    this.resetfilter(contacts);
  };

  handleDelete = (e, contactName) => {
    console.log(e, contactName);
    const { contacts } = this.state;
    const changedArray = contacts.filter(
      contact => contact.name !== contactName
    );

    this.resetfilter(changedArray);
  };
  render() {
    const { filter, filteredContacts } = this.state;
    const { handleChange, handleSubmit, handleFilter, handleDelete } = this;
    return (
      <FlexBox ml="2%" mt={4} display="flex" flexDirection="column">
        <FlexBox display="flex" flexDirection="column" mb={3}>
          <StatHeader> Phonebook</StatHeader>
          <PhonebookOptions
            handleChange={e => handleChange(e)}
            handleSubmit={e => handleSubmit(e)}
          />
        </FlexBox>

        <div>
          <StatHeader> Contacts</StatHeader>
          <SearchBar handleFilter={e => handleFilter(e)} filter={filter} />
          <ContactList
            filteredContacts={filteredContacts}
            handleDelete={handleDelete}
          />
        </div>
      </FlexBox>
    );
  }
}
