// new project/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDebounce, useDebouncedValue } from '@/core/hooks/useDebounce';

// آیکن جستجو به صورت SVG
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

// استایل آیکن در داخل اینپوت
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textGrey};
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px; /* افزودن پدینگ چپ برای آیکن */
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8f9fa; // تغییر پس‌زمینه برای تمایز

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;
interface DebouncedSearchInputProps {
  onSearchChange: (searchTerm: string) => void;
  value?: string; // ✅ اضافه کن
  placeholder?: string;
  delay?: number;
}

export const DebouncedSearchInput: React.FC<DebouncedSearchInputProps> = ({
  onSearchChange,
  value,
  placeholder = "Search...",
  delay = 1200,
}) => {
  const [searchTerm, setSearchTerm] = useState(value ?? '');
  const debouncedInput = useDebouncedValue(searchTerm, delay);

  // Sync local state if value changes from outside
  useEffect(() => {
    if (value !== undefined && value !== searchTerm) {
      setSearchTerm(value);
    }
  }, [value]);

  useEffect(() => {
    onSearchChange(debouncedInput);
  }, [debouncedInput]);

  return (
    <SearchWrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
};
