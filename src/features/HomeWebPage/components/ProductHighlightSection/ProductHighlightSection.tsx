import React from 'react';
import { PHSectionContainer } from './ProductHighlightSection.styles';
import { ProductCard } from './ProductCard'; // Import the new ProductCard


const ProductHighlightSection: React.FC = () => {
  const handleBottleLearnMore = () => {
     
  };

  const handleTabletsLearnMore = () => {
     
  };

  const bottleDescription = (
    <>
      Hydration, reimagined.
      <br />
      Molecular hydrogen meets frequency to light up your cells.
    </>
  );

  const tabletsDescription = (
    <>
      Restorative wellness, amplified.
      <br />
      Longevity molecules in every droplet—activating vitality from within.
    </>
  );

  return (
    <PHSectionContainer>
      <ProductCard
        title="Bottle"
        description={bottleDescription}
        buttonText="Learn more"
        onButtonClick={handleBottleLearnMore}
        // Assuming image is in public/images/
        backgroundImageUrl="/images/bottle_card_bg.jpg" // Placeholder, use actual image from Figma (e.g. "image" for bottle card)
        backgroundColor="#7A7478" // Fallback from Figma's Rectangle 15
        dataAos="fade-up"
        dataAosDelay="100"
      />
      <ProductCard
        title="Tablets"
        description={tabletsDescription}
        buttonText="Learn more"
        onButtonClick={handleTabletsLearnMore}
        // Assuming image is in public/images/
        backgroundImageUrl="/images/tablets_card_bg.jpg" // Placeholder, use actual image from Figma (e.g. "image 33")
        backgroundColor="#3A9FB1" // Fallback from Figma's Rectangle 16
        dataAos="fade-up"
        dataAosDelay="250"
      />
    </PHSectionContainer>
  );
};

export default ProductHighlightSection;
