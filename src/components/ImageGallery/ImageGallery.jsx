import React, { useState, useEffect } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul className={styles.imageGallery}>
        {data.map(picture => (
          <ImageGalleryItem pictureData={picture} key={picture.id} />
        ))}
      </ul>
      {/* <BounceLoader color="#3679d6" /> */}
    </div>
  );
};
