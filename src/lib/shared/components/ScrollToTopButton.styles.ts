// src/lib/shared/components/ScrollToTopButton/ScrollToTopButton.styles.ts
import styled from 'styled-components';

interface ScrollButtonProps {
    $isVisible: boolean;
}

export const ScrollButton = styled.button<ScrollButtonProps>`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    
    border: none;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(0)')};
    visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s;
    
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;