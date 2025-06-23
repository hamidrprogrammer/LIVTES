import React, { useState } from 'react';
// START: 1. DefaultTheme را برای تایپ‌دهی صحیح theme ایمپورت می‌کنیم
import styled, { css, DefaultTheme } from 'styled-components';
import { ContactGroup } from '@/core/types/api/contactGroup';
import { FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import { useDeleteContactGroupMutation } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import { showToast } from '@/lib/shared/stores/toastStore';

// START: 2. یک اینترفیس برای پراپ‌های استایل تعریف می‌کنیم تا از تکرار کد جلوگیری شود
interface StyleProps {
  $isInvoiceDefault?: boolean;
  theme: DefaultTheme;
}
// END: 2

const CardWrapper = styled.div<{ $isInvoiceDefault?: boolean }>`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  /* START: 3. از اینترفیس تعریف شده برای تایپ‌دهی استفاده می‌کنیم */
  ${({ $isInvoiceDefault, theme }: StyleProps) =>
    $isInvoiceDefault &&
    css`
      border-color: ${theme.colors.accent};
    `}
  /* END: 3 */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const AddressBlock = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 16px;
  margin-top: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover { color: ${({ theme }) => theme.colors.primaryDark}; }
`;

// START: 4. تایپ‌دهی صریح برای پراپ‌های این کامپوننت استایل‌دهی شده نیز انجام می‌شود
const SetDefaultButton = styled(ActionButton)<{ $isInvoiceDefault?: boolean }>`
  color: ${({ $isInvoiceDefault, theme }: StyleProps) => $isInvoiceDefault ? theme.colors.accent : theme.colors.textGrey};
  cursor: ${({ $isInvoiceDefault }) => $isInvoiceDefault ? 'default' : 'pointer'};
  
  &:hover {
    color: ${({ $isInvoiceDefault, theme }: StyleProps) => $isInvoiceDefault ? theme.colors.accent : theme.colors.primaryDark};
  }
`;
// END: 4

interface AddressCardProps {
  address: ContactGroup;
  isInvoiceDefault?: boolean;
  onEdit: () => void;
  onSetAsInvoice: () => void;
  isSettingInvoice: boolean;
}

export const AddressCard: React.FC<AddressCardProps> = ({ address, isInvoiceDefault, onEdit, onSetAsInvoice, isSettingInvoice }) => {
  const { mutate: deleteAddress, isPending: isDeleting } = useDeleteContactGroupMutation({
    onSuccess: () =>           showToast("Address deleted.",'info')
  });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      deleteAddress(address.id);
    }
  };
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
 const handleDeleteConfirm = () => {
    deleteAddress(address.id);
  };
  return (
    <CardWrapper $isInvoiceDefault={isInvoiceDefault} data-aos="fade-up">
      <div>
        <CardHeader>
          <Title>{address.title}</Title>
          <ActionButton onClick={() => setDeleteModalOpen(true)} disabled={isDeleting}>
            <FiTrash2 />
          </ActionButton>
        </CardHeader>
        <AddressBlock>
          {address.full_name}<br />
          {address.address?.address1}<br />
          {address.address?.postal_code} {address.address?.city}<br />
          {address.address?.country?.name}
        </AddressBlock>
      </div>
      <Actions>
        <SetDefaultButton onClick={onSetAsInvoice} $isInvoiceDefault={isInvoiceDefault} disabled={isInvoiceDefault || isSettingInvoice}>
          <FiCheckCircle /> {isInvoiceDefault ? 'Default Invoice' : 'Set as Invoice'}
        </SetDefaultButton>
        <ActionButton onClick={onEdit}>
          <FiEdit /> Edit
        </ActionButton>
      </Actions>
         <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
      />
    </CardWrapper>
  );
};