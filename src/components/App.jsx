import { Component } from 'react';
import { Box } from './Box';
import Video from './VideoPlayer/Video';
import videosData from './videos.json';
import Player from './VideoPlayer/Player';
import Statistic from './Feedback/Statistic';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  render() {
    const { selectedVideo } = this.state;
    // console.table(videos);
    return (
      <Box as="main">
        <Video
          items={videosData}
          onSelect={this.selectVideo}
          selected={selectedVideo}
        />
        {selectedVideo && <Player link={selectedVideo} />}
        <Statistic />
        <Phonebook />
      </Box>
    );
  }
}
