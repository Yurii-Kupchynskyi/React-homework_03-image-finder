import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul className={styles.imageGallery}>
        {data &&
          data.map(picture => (
            <ImageGalleryItem pictureData={picture} key={picture.id} />
          ))}
      </ul>
    </div>
  );
};
