// new project/lib/shared/components/SortDropdown/SortDropdown.tsx

import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8f9fa;
  appearance: none; // حذف ظاهر پیش‌فرض
  cursor: pointer;
  width: 120px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}
const options: SortOption[] = [
    { value: 'DESC', label: 'Newest' },
    { value: 'ASC', label: 'Oldest' },
 
];
export const SortDropdown: React.FC<SortDropdownProps> = ({  value, onChange }) => {
  return (
    <SelectWrapper>
      <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};