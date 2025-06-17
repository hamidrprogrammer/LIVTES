import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { responsive } from '@/core/theme/responsive';

// Helper function to generate the array of pages to show
const getPaginationItems = (currentPage: number, totalPages: number): (number | string)[] => {
  const delta = 2; // How many pages to show around the current page
  const range = [];
  for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    range.unshift('...');
  }
  if (currentPage + delta < totalPages - 1) {
    range.push('...');
  }

  range.unshift(1);
  if (totalPages > 1) {
    range.push(totalPages);
  }

  // Remove duplicates
  return [...new Set(range)];
};


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Animation happens only once
    });
  }, []);

  if (totalPages <= 1) {
    return null;
  }

  const paginationItems = getPaginationItems(currentPage, totalPages);

  const handlePrevious = () => {
    onPageChange(Math.max(1, currentPage - 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(totalPages, currentPage + 1));
  };

  return (
    <PaginationContainer data-aos="fade-up" data-aos-delay="200">
      <NavButton onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </NavButton>

      {paginationItems.map((item, index) =>
        typeof item === 'string' ? (
          <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
        ) : (
          <PageButton
            key={item}
            isActive={item === currentPage}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PageButton>
        )
      )}

      <NavButton onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </NavButton>
    </PaginationContainer>
  );
};


// --- Styled Components ---

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;

  ${responsive.mobile(`
    gap: 0.25rem; // اصلاح شده: کاهش فاصله در موبایل
    padding: 1rem 0.5rem;
  `)}
`;

const baseButtonStyles = css`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.greyLight};
  }

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavButton = styled.button`
  ${baseButtonStyles}
  padding: 0.5rem 1rem;

  ${responsive.mobile(`
    padding: 0.5rem 0.75rem; // اصلاح شده: کاهش پدینگ در موبایل
  `)}
`;

const PageButton = styled.button<{ isActive: boolean }>`
  ${baseButtonStyles}
  width: 40px;
  height: 40px;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.primary};
      color: #ffffff;
      border-color: ${theme.colors.primary};
      font-weight: 700;
    `}
  
  ${responsive.mobile(`
    width: 36px; // اصلاح شده: کاهش ابعاد در موبایل
    height: 36px; // اصلاح شده: کاهش ابعاد در موبایل
  `)}
`;

const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.accentBlue};

  ${responsive.mobile(`
    width: 20px; // اصلاح شده: کاهش عرض در موبایل
  `)}
`;