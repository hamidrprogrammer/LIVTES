import React from 'react';
import SharedButton from '../../components/SharedButton/SharedButton';
import {
  SectionContainer,
  ContentWrapper,
  TextAndButtonColumn,
  ImageColumn,
  Title,
  Subtitle,
  Paragraph,
  BackgroundImage43,
  TabletImageTop,
  TabletImageBottom,
  Image45,
} from './CellularFusionExplainedSection.styles';
import { useNavigate } from 'react-router-dom';

const CellularFusionExplainedSection: React.FC = () => {
  const navigator = useNavigate();

  const handleSubscriptionClick = () => {
   navigator("/tablete")
  };

  return (
    <SectionContainer id="cellular-fusion">
      <BackgroundImage43 data-aos="fade-left" data-aos-duration="1500" data-aos-anchor-placement="top-center"/>
      <ContentWrapper>
        <TextAndButtonColumn>
          <div data-aos="fade-right" data-aos-delay="100">
            <Title>That idea became LVQ+</Title>
          </div>

          <Paragraph data-aos="fade-right" data-aos-delay="200">
            We created Cellular Fusion —<br />
            To awaken what’s already there.<br />
            To restore your energy.<br />
            To reignite your light.
          </Paragraph>

          <div data-aos="fade-right" data-aos-delay="300">
            <Subtitle>
              What if it could be this simple - Bringing your light back with
              just a tablet and a glass of water?
            </Subtitle>
          </div>
          
          <div data-aos="fade-right" data-aos-delay="400">
            <Title>Imagine this...</Title>
          </div>

          <Paragraph className="large-italic" data-aos="fade-right" data-aos-delay="500">
            You sleep deeply.<br />
            You wake up clear.<br />
            Energy flows all day - steady, strong.<br />
            There’s calm in your body.<br />
            A glow from the inside out.<br />
            You recover faster.<br />
            You feel… lighter.
          </Paragraph>

          <div data-aos="fade-right" data-aos-delay="600">
             <Title>The Formula <br/>Behind the Feeling.</Title>
          </div>
          
          <Paragraph data-aos="fade-right" data-aos-delay="700">
            We didn’t create a supplement. <br />
            We created a cellular energy system — a fusion upgrade that taps
            into your body’s natural intelligence for performance, longevity,
            and metabolic clarity.
          </Paragraph>

          <div data-aos="fade-right" data-aos-delay="800" style={{ marginTop: '20px' }}>
            <SharedButton variant="secondary" onClick={handleSubscriptionClick}>
              Start Subscription
            </SharedButton>
          </div>
        </TextAndButtonColumn>

        <ImageColumn>
          <TabletImageTop data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="top-center"/>
          <TabletImageBottom data-aos="fade-left" data-aos-delay="700" data-aos-anchor-placement="center-center"/>
          <Image45 data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="bottom-bottom"/>
        </ImageColumn>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default CellularFusionExplainedSection;
