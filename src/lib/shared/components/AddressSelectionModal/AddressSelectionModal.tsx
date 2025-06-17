import React from 'react';
import styled from 'styled-components';
import { Card } from '@/features/Checkout/page/components/Layout';
import { UserInvoiceContactGroup } from '@/core/types/api/user';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const ModalContent = styled(Card)`
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textGrey};
`;

const AddressOption = styled.div<{ isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme, isSelected }) => isSelected ? theme.colors.accent : theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

interface AddressSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  addresses: UserInvoiceContactGroup[];
  selectedAddressId: number | null;
  onSelectAddress: (addressId: number,event:any) => void;
  title: string;
}

export const AddressSelectionModal: React.FC<AddressSelectionModalProps> = ({
  isOpen,
  onClose,
  addresses,
  selectedAddressId,
  onSelectAddress,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <div>
          {addresses.map((address) => (
            <AddressOption
              key={address.id}
              isSelected={selectedAddressId === address.id}
              onClick={(event) => {
                onSelectAddress(address.id,event);
                onClose();
              }}
            >
              <strong>{address.title}</strong>
              <p>{address.full_name}</p>
              <p>{address.address?.address1}, {address.address?.city}</p>
              <p>{address.address?.country?.name}</p>
            </AddressOption>
          ))}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};