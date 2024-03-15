import React, { Component } from 'react';
import ReactPlayer from 'react-player/vimeo';

export default class Player extends Component {
  render() {
    const { link } = this.props;
    return (
      <div style={{ marginBottom: '10px' }}>
        <ReactPlayer controls url={link} />
      </div>
    );
  }
}
