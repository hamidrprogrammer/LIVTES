import React from 'react';
import FeaturePill from './FeaturePill';
import * as S from './FeatureHighlightsSection.styles';

const pillData = [
  {
    id: 'pill1',
    text: (
      <>
        3 unique frequencies
        <br />
        in the lid
      </>
    ),
    // Figma: left: 1022px; top: 4173px (relative to page)
    // Section top: 3997px. Pill top relative to section: 4173 - 3997 = 176px
    // For ContentWrapper (1440px wide), left 1022px is far right.
    customStyles: { top: '-130px', left: 'calc(1022px - (100vw - 1440px)/2 - 5px)', right: undefined }, // Adjust 24px based on padding
    // Simpler: { top: '176px', left: '71%' } // (1022/1440)
    aosDelay: '100',
  },
  {
    id: 'pill2',
    text: (
      <>
        Hydrogen rich 3<br />
        phase formula
      </>
    ),
    // Figma: left: 813px; top: 4497px (relative to page)
    // Pill top relative to section: 4497 - 3997 = 500px
    customStyles: { top: '200px', left: 'calc(813px - (100vw - 1440px)/2 - 1px)' },
    // Simpler: { top: '500px', left: '56.5%' }
    aosDelay: '200',
  },
  {
    id: 'pill3',
    text: (
      <>
        Chromotherapy
        <br />
        features 7 colours
      </>
    ),
    ellipsePosition: 'right',
    // Figma: left: 404px; top: 4401px (relative to page)
    // Pill top relative to section: 4401 - 3997 = 404px
    customStyles: { top: '150px', left: 'calc(404px - (100vw - 1440px)/3 - 0px)' },
    // Simpler: { top: '404px', left: '28%' }
    aosDelay: '300',
  },
  {
    id: 'pill4',
    text: 'Magnetic Ring Base',
    height: '43px', // Specific height for this pill
    // Figma: left: 513px; top: 4722px (relative to page)
    // Pill top relative to section: 4722 - 3997 = 725px
    customStyles: { top: '725px', left: 'calc(513px - (100vw - 1440px)/2 - 24px)' },
    // Simpler: { top: '725px', left: '35.6%' }
    aosDelay: '400',
  },
];


// Helper function to adjust pill positions for responsive design if needed.
// The current CSS in FeaturePill.styles.ts handles stacking on mobile.
// This is a placeholder if more complex logic is needed for customStyles.
const getResponsivePillStyles = (baseStyles: React.CSSProperties): React.CSSProperties => {
  // For now, we rely on media queries in FeaturePill.styles.ts
  // If you needed to change top/left values dynamically based on viewport width via JS:
  // if (window.innerWidth < parseInt(theme.breakpoints.tablet, 10)) {
  //   return { position: 'static', margin: '10px auto' }; // Example override
  // }
  return baseStyles;
};


const FeatureHighlightsSection: React.FC = () => {
  // A note on positioning: The `customStyles` for pills use `calc` to attempt to replicate
  // Figma's absolute pixel values based on a 1440px canvas.
  // `(100vw - 1440px)/2` is the space outside the 1440px centered content on wider screens.
  // `24px` is an assumed padding for ContentWrapper (theme.spacing.xl).
  // This is complex and might need fine-tuning or a different strategy (e.g., percentages, grid)
  // for perfect cross-viewport pixel-perfection. For mobile, pills will stack due to FeaturePill's CSS.

  return (
    <S.SectionWrapper id="feature-highlights-section">
      <S.ContentWrapper>
        <S.Title data-aos="fade-left" data-aos-duration="1000">
          We created Planet Earth in a Bottle.
        </S.Title>
        <S.PillsContainer>
          {pillData.map((pill) => (
            <FeaturePill
              key={pill.id}
              text={pill.text}
              ellipsePosition={pill.ellipsePosition as 'left' | 'right'}
              // Apply responsive styles if needed, though CSS handles stacking
              customStyles={getResponsivePillStyles(pill.customStyles || {})}
              aosDelay={pill.aosDelay}
              height={pill.height}
              aosName="zoom-in" // Different animation for pills
            />
          ))}
        </S.PillsContainer>
      </S.ContentWrapper>
    </S.SectionWrapper>
  );
};

export default FeatureHighlightsSection;
