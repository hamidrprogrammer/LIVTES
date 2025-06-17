import React from 'react';
import styles from './LongevityBanner.module.css'; // Import the CSS module
import Quote from '@/assets/images/home/Quote.svg';

const LongevityBanner = ({ buttonLink = "#" }) => {
  return (
    <div className={styles.longevityBanner}>
      
      <div className={styles.longevityBannerText}>
        The <span style={{ color: "#3FFFF8", fontWeight: 'bold'}}>Future</span>  of <br/> Longevity is light.
      </div>
      <div className={styles.buttonContainer}>
   <a href={buttonLink} className={styles.exploreButton}>
        Explore the bottle
      </a>
      </div>
   
    </div>
  );
};

export default LongevityBanner;