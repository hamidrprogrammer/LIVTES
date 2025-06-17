import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styled from 'styled-components';

// Define styled component for the button
const StyledButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 196, 180, 0.28), rgba(2, 137, 209, 0.3));
  border: 2px solid #3FFFF8;
  border-radius: 50px;
  padding: 15px 30px;
  color: #3FFFF8;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: auto;
  min-width: 200px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    min-width: 180px;
    margin-top: 10px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    max-width: 280px;
    min-width: unset;
    padding: 14px;
  }
`;

const ExploreButton = ({ onClick }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledButton
      data-aos="fade-up"
      onClick={onClick}
    >
      Explore the bottle
    </StyledButton>
  );
};

export default ExploreButton;