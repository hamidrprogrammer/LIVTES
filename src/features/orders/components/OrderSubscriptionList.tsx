import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useInfiniteOrderSubscriptionsQuery } from '../hooks/useOrderQueries';
import { GetOrderSubscriptionListParams } from '@/core/types/api/order';
import { OrderSubscriptionCard } from './OrderSubscriptionCard';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { DebouncedSearchInput } from '@/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput';
import { SortDropdown } from '@/lib/shared/components/SortDropdown/SortDropdown';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const LoadMoreButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin: 16px auto;
  display: block;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface OrderSubscriptionListProps {
  onViewDetails: (id: number) => void;
}
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
export const OrderSubscriptionList: React.FC<OrderSubscriptionListProps> = ({ onViewDetails }) => {
   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // یا هر تعداد که میخواهید در هر صفحه نمایش داده شود

 const [search, setSearch] = useState('');
  const [sort, setSort] = useState('DESC'); 
  const {
    data,
    error,
    status,
  } = useInfiniteOrderSubscriptionsQuery({ page: currentPage, 
    per_page: itemsPerPage, 'orderBy[id]': sort, 
    search: search  });

  if (status === 'pending') return <p>Loading subscriptions...</p>;
  if (status === 'error') return <p>An error has occurred: {error.message}</p>;
  
  return (
    <div data-aos="fade-up">
      <Header>
        <Title>My Order Subscriptions</Title>
        <Row>
               
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
      <ListContainer>
        {data?.data?.map((page, i) => (
          <React.Fragment key={i}>
           
              <OrderSubscriptionCard
                key={page.id}
                subscription={page}
                onViewDetails={() => onViewDetails(page?.id??0)}
              />
           
           
          </React.Fragment>
        ))}
            
      </ListContainer>
       <Pagination
                currentPage={currentPage}
                totalPages={data.meta?.last_page??0}
                onPageChange={setCurrentPage}
              />
    </div>
  );
};