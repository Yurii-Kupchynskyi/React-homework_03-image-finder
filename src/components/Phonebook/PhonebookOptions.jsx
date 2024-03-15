import React, { Component } from 'react';
import { FlexBox } from 'components/Box';
export class PhonebookOptions extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <FlexBox display="flex" gap="20px">
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={e => {
                handleChange(e);
              }}
              required
            />

            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={e => {
                handleChange(e);
              }}
              required
            />
            <button type="submit">Add contact</button>
          </FlexBox>
        </form>
      </div>
    );
  }
}
