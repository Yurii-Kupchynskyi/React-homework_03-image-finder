import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import React, { useState, useEffect } from 'react';
import { getPictures } from './axios/config';
import { BounceLoader } from 'react-spinners';
import { mapper } from 'services/mapper';

export const App = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        console.log('Mounting');
        const { hits } = await getPictures(1);
        const upDatePictures = mapper(hits);

        setPictures([...upDatePictures]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (page <= 1 && query === '') {
      return;
    }
    setLoading(true);
    const fetchData = async (page, query) => {
      try {
        console.log('Manipulating with page');
        const { hits } = await getPictures(page, query);
        const upDatePictures = mapper(hits);

        setPictures(prevPic =>
          prevPic ? [...prevPic, ...upDatePictures] : upDatePictures
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(page, query);
  }, [page, query]);

  // useEffect(() => {
  //   if (!isLoading && page > 1) {
  //     console.log('Scrolling down...');
  //     window.scrollBy(0, window.innerHeight);
  //   }
  // }, [isLoading, pictures, page]);

  const handlerSubmit = currentQuery => {
    if (query === currentQuery || currentQuery.trim() === '') {
      return;
    }

    setPage(1);
    setPictures([]);
    setQuery(currentQuery);
  };

  return (
    <Box as="main" className={styles.app}>
      <Searchbar onSubmit={handlerSubmit} />
      {pictures.length !== 0 && <ImageGallery data={pictures} />}
      {isLoading && (
        <div className={styles.spinnerContainer}>
          <BounceLoader color="#3679d6" />
        </div>
      )}
      {pictures.length !== 0 && (
        <button onClick={loadMore} className={styles.button}>
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      )}
    </Box>
  );
};
