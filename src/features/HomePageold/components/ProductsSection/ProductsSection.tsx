/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const  imageProductTwo = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imageProductTwo.avif'; //
const  imageProduct = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imageProduct.avif'; //
import { useNavigate } from 'react-router-dom';

const ProductsContainer = styled.section`
  position: relative; //
  overflow: hidden; //
  padding: 2.5rem 0; // Add padding for mobile
`;

const ProductsContent = styled.div`
  max-width: 1500px; //
  margin: 0 auto; //
  padding: 0 1rem; // Mobile padding
  display: grid;
  grid-template-columns: 1fr; // Mobile: single column (Original 768px)
  gap: 1.5rem; // Mobile gap (Original 3rem)
  
  @media (min-width: 769px) { // Tablet and up
    grid-template-columns: repeat(2, 1fr); //
    gap: 3rem; //
    padding: 0 5%; //
  }
`;

const ProductCard = styled(motion.div)`
  border-radius: 10px; //
  overflow: hidden; //
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); //
  display: flex; //
  flex-direction: column; //
  height: 350px; // Adjusted height for mobile

  @media (min-width: 769px) { // Tablet and up
    height: 600px; //
  }
`;

const ProductImage = styled.div`
  height: 100%; // Image takes full height of the card
  wdith: 100%; //
  background-size: cover; //
  background-position: center; //
  background-repeat: no-repeat; //
  position: relative; //

  // The original ProductImage had height: 600px, which is now handled by ProductCard
  // and this component taking 100% height of its parent.
`;

// Styles for ProductContent, ProductTitle etc. (currently commented out in JSX)
// If these are enabled, they would need responsive adjustments too.
const ProductContent = styled.div`
  padding: 1.5rem; // Adjusted padding for mobile
  flex-grow: 1; //
  display: flex; //
  flex-direction: column; //
  background-color: #f8f9fa; // Example background if content is separate from image

  @media (min-width: 769px) {
    padding: 2rem; //
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem; // Adjusted for mobile
  font-weight: 600; //
  margin-bottom: 0.75rem; //
  color: #002030; //

  @media (min-width: 769px) {
    font-size: 1.5rem; //
    margin-bottom: 1rem; //
  }
`;

const ProductDescription = styled.p`
  font-size: 0.9rem; // Adjusted for mobile
  line-height: 1.6; //
  color: #555; //
  margin-bottom: 1rem; //
  flex-grow: 1; //

  @media (min-width: 769px) {
    font-size: 1rem; //
    margin-bottom: 1.5rem; //
  }
`;

const ProductPrice = styled.div`
  font-size: 1.1rem; // Adjusted for mobile
  font-weight: 600; //
  color: #002030; //
  margin-bottom: 1rem; //
  
  span {
    color: #00a0ff; //
  }
  @media (min-width: 769px) {
    font-size: 1.2rem; //
    margin-bottom: 1.5rem; //
  }
`;

const ProductButton = styled(motion.button)`
  background: linear-gradient(45deg, #00e0ff, #00a0ff); //
  color: white; //
  border: none; //
  padding: 0.7rem 1.5rem; // Adjusted for mobile
  font-size: 0.9rem; // Adjusted for mobile
  font-weight: 600; //
  border-radius: 30px; //
  cursor: pointer; //
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3); //
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); //
  align-self: flex-start; //
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5); //
  }

  @media (min-width: 769px) {
    padding: 0.8rem 2rem; //
    font-size: 1rem; //
  }
`;

// BackgroundGlow and BackgroundSize are defined but not used in JSX.
// const BackgroundGlow = styled.div` ... `;
// const BackgroundSize= styled.div` ... `;

interface ProductsSectionProps {} //

const ProductsSection: React.FC<ProductsSectionProps> = () => { //
  const [ref, inView] = useInView({ //
    triggerOnce: true, //
    threshold: 0.1, //
  });
  
  const containerVariants = { /* ... same as original ... */ }; //
  const cardVariants = { /* ... same as original ... */ }; //
  // const buttonVariants = { /* ... same as original ... */ }; // (Defined but not used on ProductButton directly)
  
  const products = [ //
    { id: 1, title: 'Bottle', description: '...', price: '$149.99', image: imageProductTwo },
    { id: 2, title: 'Tablets', description: '...', price: '$39.99', image: imageProduct },
  ];
  const navigate = useNavigate();
  
  return (
    <ProductsContainer> {/* */}
      <ProductsContent
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        as={motion.div}
      >
        {products.map((product) => (
          <ProductCard key={product.id} variants={cardVariants}>
             {/* Using .src because imageProductTwo and imageProduct are static imports */}
            <ProductImage style={{ backgroundImage: `url(${product.image })` }}
             onClick={() => product.id == 1 ? navigate("/bottle") : navigate("/tablets")} /> 
            {/* ProductContent is commented out in original JSX */}
            {/* <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>From <span>{product.price}</span></ProductPrice>
              <ProductButton
                variants={buttonVariants} // This should be buttonVariants from the list above
                whileHover="hover"
                whileTap="tap"
              >
                Shop Now
              </ProductButton>
            </ProductContent> */}
          </ProductCard>
        ))}
      </ProductsContent>
      {/* <BackgroundSize/> */} {/* Commented out in original */}
    </ProductsContainer>
  );
};

export default ProductsSection; //