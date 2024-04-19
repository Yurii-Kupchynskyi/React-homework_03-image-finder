import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul className={styles.imageGallery}>
        {data &&
          data.map((picture, index) => (
            <ImageGalleryItem pictureData={picture} key={index} />
          ))}
      </ul>
    </div>
  );
};
