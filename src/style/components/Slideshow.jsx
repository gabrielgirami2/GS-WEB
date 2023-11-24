
import { useState } from 'react';
import styles from '../Slideshow.module.scss'; 

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/302/200',
  ];

  const captions = ['Gatinho 1', 'Gatinho 2', 'Gatinho 3'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <p>{captions[currentIndex]}</p>
      </div>

      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default Slideshow;