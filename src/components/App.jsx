import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { options } from './axios/config';
import { BounceLoader } from 'react-spinners';

export const App = () => {
  const [pictures, setPictures] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${options.baseURL}?page=1&key=${options.apiKey}`,
        {
          params: {
            q: 'Japan',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: '14',
          },
        }
      );
      const imageData = response.data.hits;
      // console.log(imageData);
      setPictures(imageData);
      // return true;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
    fetchData();
  }, []);

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
    </Box>
  );
};
