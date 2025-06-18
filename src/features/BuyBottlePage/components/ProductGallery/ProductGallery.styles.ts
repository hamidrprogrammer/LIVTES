// BuyBottlePage/components/ProductGallery/ProductGallery.styles.ts
import styled from 'styled-components';
const galleryBackgroundImage = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/buy/image.avif';
const group6Icon = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/buy/group_6.avif';
const group7Icon = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/buy/group_7.avif';


export const GalleryWrapper = styled.div`
  /* Removed fixed height. Using aspect-ratio to maintain proportions. */
  aspect-ratio: 853 / 800;
  width: 100%; /* Take full width of parent grid area */
  background-image: url(${galleryBackgroundImage});
  background-size: cover; /* Use 'cover' to prevent distortion */
  background-position: center;
  position: relative;
  overflow: hidden; /* Ensures children don't overflow the rounded corners if any */
  border-radius: 8px; /* Optional: adds a nice touch */
`;

const Arrow = styled.img`
  height: 18px;
  width: 23px;
  position: absolute;
  /* Vertically center the arrows */
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export const PrevArrow = styled(Arrow).attrs({ src: group7Icon })`
  /* Removed fixed top value. Positioned from the left edge. */
  left: 16px;
  @media (min-width: 768px) {
    left: 30px;
  }
`;

export const NextArrow = styled(Arrow).attrs({ src: group6Icon })`
  /* Removed fixed top value. Positioned from the right edge. */
  right: 16px;
  @media (min-width: 768px) {
    right: 30px;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  /* Removed fixed top value. Positioned from the bottom edge. */
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;

  @media (min-width: 768px) {
    bottom: 30px;
  }
`;

export const Dot = styled.div<{ $active?: boolean }>`
  background-color: ${props => props.$active ? '#60C9DA' : 'rgba(28, 31, 35, 0.7)'};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;