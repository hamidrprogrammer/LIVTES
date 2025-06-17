import React from 'react';
import * as S from './FrequencyIntroSection.styles';

interface FrequencyButton {
  label: string;
  width: string; // For specific button width from Figma
  targetId: string;
}

const frequencyButtons: FrequencyButton[] = [
  { label: 'Lumivitae', width: '119px', targetId: 'lumivitae-frequency-detail-section' },
  { label: 'Recovery', width: '114px', targetId: 'recovery-frequency-detail-section' },
  { label: 'Energy', width: '97px', targetId: 'energy-frequency-detail-section' },
];

const FrequencyIntroSection: React.FC = () => {
  const handleFrequencyButtonClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with ID "${targetId}" not found.`);
    }
  };

  return (
    <S.SectionWrapper id="frequency-intro-section">
      <S.ContentContainer>
        <S.TextAndButtonCluster data-aos="fade-right">
          <S.TextBlock>
            <S.Title>Frequency</S.Title>
            <S.Subtitle>
              Hydration, Reimagined. <br />
              Energy, Tuned to You.
            </S.Subtitle>
            <S.Paragraph>
              Water is more than just a drink. It’s a conductor of energy, a
              carrier of life, and now—an experience tailored to you. That’s why
              we created the LumiVitæ Frequency Lid—a breakthrough in hydration
              that restores water’s energetic blueprint, aligning it with your
              body’s needs.
            </S.Paragraph>
          </S.TextBlock>
          <S.InstructionText>
            Tap below to discover each frequency.
          </S.InstructionText>
          <S.ButtonGroup>
            {frequencyButtons.map((button, index) => (
              <S.StyledButton
                key={button.label}
                width={button.width}
                onClick={() => handleFrequencyButtonClick(button.targetId)}
                data-aos="fade-up"
                data-aos-delay={`${index * 100 + 100}`} // Staggered animation
              >
                {button.label}
              </S.StyledButton>
            ))}
          </S.ButtonGroup>
        </S.TextAndButtonCluster>
        {/* An image of the bottle could be placed on the right side if design implies it */}
        {/* <S.ImagePlaceholder data-aos="fade-left" /> */}
      </S.ContentContainer>
    </S.SectionWrapper>
  );
};

export default FrequencyIntroSection;
