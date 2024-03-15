import React, { Component } from 'react';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <>
        <h2>{message}</h2>
      </>
    );
  }
}
// style={{ backgroundColor: 'greenyellow' }}
