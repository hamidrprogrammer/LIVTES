// ge/features/user/components/addresses/AddressListPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { useGetUserProfileQuery, useChangeInvoiceContactGroupMutation } from '@/features/user/hooks/useUserQueries';
import { AddressCard } from './AddressCard';
import { AddressFormModal } from './AddressFormModal';
import { ContactGroup, ListContactGroupsParams } from '@/core/types/api/contactGroup';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { DebouncedSearchInput } from '@/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput';
import { SortDropdown } from '@/lib/shared/components/SortDropdown/SortDropdown';
import { showToast } from '@/lib/shared/stores/toastStore';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
  flex-wrap: wrap; // Allow wrapping on smaller screens
  gap: 16px; // Add gap for wrapped items

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0; // Remove default margin

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const CreateButton = styled.button`
  padding: 10px 20px;
  border: none;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
  }
`;

const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: 480px) {
      grid-template-columns: 1fr; // Single column on mobile
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
export const AddressListPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<ContactGroup | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 
  const { data: userProfileData } = useGetUserProfileQuery();
  const currentInvoiceId = userProfileData?.data.invoice_contact_group_id;
 const [search, setSearch] = useState('');
  const [sort, setSort] = useState('DESC'); 
  const listParams = useMemo((): ListContactGroupsParams => ({ 
    isArchive: false,page:currentPage, per_page: itemsPerPage ,
    'orderBy[id]': sort, 
    search: search }), [currentPage,search,sort]);
  const { data: addressesData, isLoading, isError,refetch } = useListContactGroupsQuery(listParams);

  const { mutate: setInvoiceAddress, isPending: isSettingInvoice } = useChangeInvoiceContactGroupMutation({
    onSuccess: () => {
      showToast('Default invoice address changed successfully!','success')
      refetch();
    },
    onError: (err) => alert(`Error: ${err.message}`),
  });

  const handleEdit = (address: ContactGroup) => {
    setEditingAddress(address);
    setIsModalOpen(true);
  };


  const handleCreateNew = () => {
    setEditingAddress(null);
    setIsModalOpen(true);
  };

  const handleSetAsInvoice = (id: number) => {
    if (id !== currentInvoiceId) {
      setInvoiceAddress({ invoice_contact_group_id: id });
    }
  };
  return (
    <PageContainer>
      <Header data-aos="fade-down">
        <Title>My Addresses</Title>
        <Row>
                       <CreateButton onClick={handleCreateNew}>Add New Address</CreateButton>

                 <DebouncedSearchInput 
                                  value={search}

                    onSearchChange={(value) => {
                        setCurrentPage(1); // با هر جستجوی جدید، به صفحه اول برگرد
                        setSearch(value);
                    }}
                    placeholder="Search by order number, product..."
                />
                  <SortDropdown 
                        value={sort}
                        onChange={(value) => {
                            setCurrentPage(1);
                            setSort(value);
                        }}
                    />
                     </Row>
      </Header>

      {isLoading && <p>Loading addresses...</p>}
      {isError && <p>Could not load addresses.</p>}
      
      <AddressGrid>
        {addressesData?.data.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            isInvoiceDefault={address.id === currentInvoiceId}
            onEdit={() => handleEdit(address)}
            onSetAsInvoice={() => handleSetAsInvoice(address.id)}
            isSettingInvoice={isSettingInvoice && address.id === currentInvoiceId}
          />
        ))}
      </AddressGrid>

      {isModalOpen && (
        <AddressFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingAddress}
        />
      )}
      { (addressesData?.meta?.last_page ?? 1) > 1 &&
         <Pagination
              currentPage={currentPage}
              totalPages={addressesData?.meta?.last_page??1}
              onPageChange={setCurrentPage}
            />
      }
    </PageContainer>
  );
};