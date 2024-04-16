import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { options } from './axios/config';
import { BounceLoader } from 'react-spinners';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${options.baseURL}?key=${options.apiKey}`,
        {
          params: {
            q: 'Japan',
            page: `${page}`,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: '12',
          },
        }
      );
      const imageData = response.data.hits;

      setPictures([...pictures, ...imageData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = e => {
    fetchData();
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    loadUsers();
  }, [page]);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && page > 1) {
      console.log('Scrolling down...');
      window.scrollBy(0, window.innerHeight);
    }
  }, [isLoading, pictures]);

  const showPictures = pictures => {
    if (pictures !== null) {
      return <ImageGallery data={pictures} />;
    } else {
      return <h2>No data</h2>;
    }
  };

  return (
    <Box as="main" className={styles.app}>
      <Searchbar />
      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <BounceLoader color="#3679d6" />
        </div>
      ) : (
        showPictures(pictures)
      )}
      <button onClick={loadMore} className={styles.button}>
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </Box>
  );
};
