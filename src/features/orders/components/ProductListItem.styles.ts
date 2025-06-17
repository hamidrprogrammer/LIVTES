import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 24px;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  &:last-child {
    border-bottom: none;
  }

  /* On tablets and mobiles, switch to a single-column layout for readability */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Use a single column */
    justify-items: start; /* Align grid items to the left */
    text-align: left; /* Align text content to the left */
    gap: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: #f8f9fa;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* When stacked, center the image for better visual balance */
  @media (max-width: 768px) {
    justify-self: center; /* Center the container in its grid cell */
    width: 100%;
    max-width: 200px; /* Prevent image from becoming excessively large */
    height: auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%; /* Ensure it takes full width in its grid cell */
`;

export const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

export const DetailText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 0;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.textDark};
    font-weight: 500;
  }

  /* For mobile, arrange label and value on opposite ends for clarity */
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  text-align: right;

  /* On mobile, align left to match other content */
  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
    margin-top: 0; /* Let parent grid-gap handle the spacing */

    /* Ensure DetailText inside this container is also responsive */
    ${DetailText} {
       display: flex;
       justify-content: space-between;
       width: 100%;
    }
  }
`;

export const ShowArticleButton = styled(Link)`
  font-size: 0.9rem;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textGrey};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
      margin-top: 8px;
      width: 100%;
      text-align: center;
  }
`;

export const MlmDetails = styled.div`
  background-color: #f1f3f5;
  border-radius: 6px;
  padding: 8px 12px;
  margin-top: 8px;
  font-size: 0.85rem;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;