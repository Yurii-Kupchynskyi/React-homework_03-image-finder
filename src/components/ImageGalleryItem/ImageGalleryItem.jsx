import React from 'react';
import styles from './ImageGallaryItem.module.css';

const ImageGalleryItem = props => {
  const { pictureData } = props;
  return (
    <li key={pictureData.id} className={styles.imageGalleryItem}>
      <img
        src={pictureData.webformatURL}
        alt={pictureData.tags}
        className={styles.imageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
