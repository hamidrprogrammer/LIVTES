// ge/new project/features/storeCredit/components/StoreCreditListPage.tsx
'use client';

import React, { useState } from 'react';
import { useListCouponsQuery } from '@/features/coupons/hooks/useCouponQueries';
import * as S from './StoreCreditListPage.styles';
import { StoreCreditCard } from './StoreCreditCard';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { styled } from 'styled-components';
import { DebouncedSearchInput } from '@/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput';
import { SortDropdown } from '@/lib/shared/components/SortDropdown/SortDropdown';
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
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
export const StoreCreditListPage: React.FC = () => {
   const [currentPage, setCurrentPage] = useState(1);
     const [search, setSearch] = useState('');
       const [sort, setSort] = useState('DESC');
  const itemsPerPage = 12; // یا هر تعداد که میخواهید در هر صفحه نمایش داده شود
  const { data, isLoading, isError } = useListCouponsQuery({ page: currentPage, per_page: itemsPerPage
  ,  'orderBy[id]': sort, 
    search: search 
   });

  if (isLoading) return <p>Loading credits...</p>;
  if (isError) return <p>Could not load store credits.</p>;

  // Filter for coupons that are store credits
  const storeCredits = data?.data.filter(coupon => 
    coupon.name && coupon.name.toLowerCase().startsWith('store credit')
  ) ?? [];

  return (
    <>
     <Header>
        <Title>My Store Credit</Title>
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
   
    <S.Wrapper>
      {storeCredits.length > 0 ? (
        <>
        
         
        <S.CreditsGrid>
          {storeCredits.map((credit) => (
            <StoreCreditCard key={credit.id} credit={credit} />
          ))}
        </S.CreditsGrid>
          <Pagination
                      currentPage={currentPage}
                      totalPages={data?.meta?.last_page??1}
                      onPageChange={setCurrentPage}
                    />
        </>
      ) : (
        <S.EmptyState>You have no store credits at the moment.</S.EmptyState>
      )}
    </S.Wrapper>
     </>
  );
};