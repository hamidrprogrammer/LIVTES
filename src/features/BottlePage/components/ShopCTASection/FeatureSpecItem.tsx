import React from 'react';
import styled from 'styled-components';
const PlaceholderIcon = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/icons/PlaceholderIcon'; // Using placeholder

interface FeatureSpecItemProps {
  iconName: string;
  textLines: string[];
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center icon and text block
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Space between feature items
  max-width: 157px; // Width of 'details' group in Figma

  svg, span[aria-label] { // Target PlaceholderIcon or actual SVGs
    margin-bottom: ${({ theme }) => theme.spacing.sm}; // Space between icon and text
    font-size: 32px; // Icon size from Figma (height: 32px)
    color: ${({ theme }) => theme.colors.accentCyan}; // Icon color
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: 14px;
  line-height: 1.2; // or 17px
  color: ${({ theme }) => theme.colors.white};
  margin: 2px 0; // Small space between lines if multiple
`;

const FeatureSpecItem: React.FC<FeatureSpecItemProps> = ({ iconName, textLines }) => {
  return (
    <ItemWrapper>
      <PlaceholderIcon name={iconName} size="32px" color="#3FFFF8" />
      {textLines.map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </ItemWrapper>
  );
};

export default FeatureSpecItem;
