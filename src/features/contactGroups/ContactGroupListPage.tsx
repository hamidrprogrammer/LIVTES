import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useListContactGroupsQuery } from './hooks/useContactGroupQueries';
import { ListContactGroupsParams } from '@/core/types/api/contactGroup';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  margin: 0;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.li`
  background-color: #ffffff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  p {
    margin: 8px 0 0 0;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 24px;

  button {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: #ffffff;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover:not(:disabled) {
      background-color: #f3f4f6;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export const ContactGroupListPage: React.FC = () => {
  const listParams = useMemo((): ListContactGroupsParams => ({
    page: 1,
    per_page: 12,
    'orderBy[id]': 'DESC',
    isArchive: false,
  }), []);

  const { data, isLoading, isError, error } = useListContactGroupsQuery(listParams);

  if (isLoading) {
    return <PageContainer><div>Loading contact groups...</div></PageContainer>;
  }

  if (isError) {
    return <PageContainer><div>Error loading contact groups: {error?.message}</div></PageContainer>;
  }

  if (!data || data.data.length === 0) {
    return <PageContainer><div>No contact groups found.</div></PageContainer>;
  }

  return (
    <PageContainer>
      <Header>Your Contact Groups</Header>
      <InfoText>
        Displaying {data.meta?.from}-{data.meta?.to} of {data.meta?.total} contact groups.
      </InfoText>
      <ContactList>
        {data.data.map(contact => (
          <ContactItem key={contact.id}>
            <strong>{contact.title}</strong> ({contact.full_name})
            {contact.address && (
              <p>
                {contact.address.address1}, {contact.address.city}, {contact.address.country?.name}
              </p>
            )}
          </ContactItem>
        ))}
      </ContactList>
      
      <PaginationContainer>
        <button disabled={!data.links?.prev}>Previous</button>
        <span> Page {data.meta?.current_page} of {data.meta?.last_page} </span>
        <button disabled={!data.links?.next}>Next</button>
      </PaginationContainer>
    </PageContainer>
  );
};