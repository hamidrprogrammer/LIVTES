/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import * as S from './PioneeringTechSection.styles';
import benefitImage1 from '../../../../assets/images/bottle/image-4.png';
import benefitImage2 from '../../../../assets/images/bottle/image-2.png';
import benefitImage3 from '../../../../assets/images/bottle/image-3.png';
import benefitImage5 from '../../../../assets/images/bottle/image-5.png';
import { Slider, SliderHandle } from '../Slider';
import group62 from '../../../../assets/images/bottle/group-6-2.png'; // Next arrow
import group72 from '../../../../assets/images/bottle/group-7-2.png'; // Back arro
const benefitsData = [

  {
    id: '1',
    imageUrl: benefitImage1,
    caption: 'Reduces oxidative stress – the root cause of aging, fatigue, and chronic disease.',
  },
  {
    id: '2',
    imageUrl: benefitImage2,
    caption: 'Boosts natural antioxidants like glutathione, the body’s master detoxifier.',
  },
  {
    id: '3',
    imageUrl:benefitImage3,
    caption: 'Enhances energy production at a cellular level by optimizing mitochondrial function.',
  },
  {
    id: '4',
    imageUrl: benefitImage5,
    caption: 'Supports healthy inflammation response, helping the body recover faster.',
  },
  {
    id: '5',
    imageUrl: benefitImage5,
    caption: 'Protects the brain, heart, muscles, and skin, promoting longevity and resilience.',
  },
];
interface PioneeringTechSectionProps {
  sliderRef: React.RefObject<SliderHandle>;
}

const PioneeringTechSection:  React.FC<PioneeringTechSectionProps> = ({ sliderRef }) => {
  return (
 <S.SectionContainer data-aos="fade-up">
      <S.SectionContent>
        <S.Title>Why Your Body Needs It.</S.Title>
        <S.Description>
          Over 3,000 scientific studies, including 200+ clinical trials,
          suggest that H2 holds extraordinary benefits across virtually
          every organ system:
        </S.Description>

        <S.SliderWrapper>
          {/* کامپوننت Slider در اینجا قرار می گیرد و ref را می پذیرد */}
          {/* محتوای اسلایدر (تصاویر و متن های زیرین) باید به عنوان children یا props به Slider داده شوند */}
          <Slider ref={sliderRef} />
        </S.SliderWrapper>
        
        <S.SliderControls>
            <img src={group72} alt="Back" onClick={() => sliderRef.current?.back()} />
            <img src={group62} alt="Next" onClick={() => sliderRef.current?.next()} />
        </S.SliderControls>

        <S.TextRow>
          <S.TextBlock>
            Molecular hydrogen transforms ordinary water into an{' '}
            <span>antioxidant powerhouse</span>
            —fuelling every cell, every system, every sip.
          </S.TextBlock>
          <S.TextBlock>
            It’s not just water. It’s the <span>future of wellness</span>. And it starts Now.
          </S.TextBlock>
        </S.TextRow>


      </S.SectionContent>
    </S.SectionContainer>
  );
};

export default PioneeringTechSection;
