// File: ge/new project/features/orders/components/OrderListPage.tsx

import React, { useState } from 'react';
import { useListOrderSalesQuery } from '../hooks/useOrderQueries';
import { OrderCard } from './OrderCard';
import { styled } from 'styled-components';
import { OrderDetailPage } from './OrderDetailPage';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { DebouncedSearchInput } from '@/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput';
import { SortDropdown } from '@/lib/shared/components/SortDropdown/SortDropdown';
// import { Pagination } from '@/lib/shared/components/pagination';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
`;

export const OrderListPage: React.FC = () => {
   const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
  const [sort, setSort] = useState('DESC'); 
  const itemsPerPage = 12; // یا هر تعداد که میخواهید در هر صفحه نمایش داده شود
  const { data, isLoading, isError } = useListOrderSalesQuery({ 
    page:currentPage, 
    per_page: itemsPerPage, 
    'orderBy[id]': sort, 
    search: search 
  });
    const [selectedId, setSelectedId] =  useState<number | null>(null);


  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Could not retrieve your orders.</p>;
  const handleBackToList = () => {
    setSelectedId(null);
  };
  return (
    <div>
    

      {selectedId ? (
              <OrderDetailPage 
                orderId={selectedId}
                onBack={handleBackToList} 
              />
            ) : (
              <>
                <Header data-aos="fade-down">
        <Title>My Orders</Title>
        <Row>
       
         <DebouncedSearchInput 
           value={search} // ✅ اضافه کن

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
      {data?.data?.map((order) => (
        <OrderCard key={order.id} order={order} onViewDetails={(id)=> setSelectedId(id)} />
      ))}

              </>
            )}
              <Pagination
        currentPage={currentPage}
        totalPages={data?.meta?.last_page??1}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};