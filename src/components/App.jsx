import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';

export class App extends Component {
  render() {
    return (
      <Box as="main" className={styles.app}>
        <Searchbar />
      </Box>
    );
  }
}
