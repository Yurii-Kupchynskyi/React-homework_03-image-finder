import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { handleFilter, filter } = this.props;
    return (
      <div>
        <input
          type="text"
          name="filter"
          title="Start enter the contact"
          onChange={e => {
            handleFilter(e);
          }}
          value={filter}
        />
      </div>
    );
  }
}
