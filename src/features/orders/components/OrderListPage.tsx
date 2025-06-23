// File: ge/new project/features/orders/components/OrderListPage.tsx

import React, { useState } from 'react';
import { useCancelOrderSubscriptionMutation, useListOrderSalesQuery } from '../hooks/useOrderQueries';
import { OrderCard } from './OrderCard';
import { styled } from 'styled-components';
import { OrderDetailPage } from './OrderDetailPage';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { DebouncedSearchInput } from '@/lib/shared/components/DebouncedSearchInput/DebouncedSearchInput';
import { SortDropdown } from '@/lib/shared/components/SortDropdown/SortDropdown';
import { showToast } from '@/lib/shared/stores/toastStore';
import { ConfirmDialog } from '@/lib/shared/components/ConfirmDialog/ConfirmDialog';
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
  const { data, isLoading, isError ,refetch} = useListOrderSalesQuery({ 
    page:currentPage, 
    per_page: itemsPerPage, 
    'orderBy[id]': sort, 
    search: search 
  });
     const cancelSubscriptionMutation = useCancelOrderSubscriptionMutation({
    onSuccess: () => {
      showToast('Subscription cancelled successfully.', 'success');
      refetch(); // Refetch the details to show the updated status
    },
    onError: (err) => {
      showToast(err.message || 'Failed to cancel subscription.', 'error');
    },
  });
    const [selectedId, setSelectedId] =  useState<number | null>(null);
  const [isCancelConfirmOpen, setCancelConfirmOpen] = useState(false);
    const [subscriptionId, setSubscriptionId] = useState(0);


  const handleCancelClick = () => {
    setCancelConfirmOpen(true);
  };

  const confirmCancellation = () => {
    cancelSubscriptionMutation.mutate(subscriptionId);
    setCancelConfirmOpen(false);
  };

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
        <OrderCard key={order.id} order={order} onViewDetails={(id)=> setSelectedId(id)} onCancel={(id)=>{
          setCancelConfirmOpen(true);
          setSubscriptionId(id);
        }}/>
      ))}

              </>
            )}
              <Pagination
        currentPage={currentPage}
        totalPages={data?.meta?.last_page??1}
        onPageChange={setCurrentPage}
      />
       <ConfirmDialog
        isOpen={isCancelConfirmOpen}
        onClose={() => setCancelConfirmOpen(false)}
        onConfirm={confirmCancellation}
        title="Confirm Cancellation"
        message="Are you sure you want to cancel this subscription? This action cannot be undone."
        confirmText="Yes, Cancel"
      />
    </div>
  );
};