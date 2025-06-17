import React, { useState } from 'react';
import { OrderSubscriptionList } from './OrderSubscriptionList';
import { OrderSubscriptionDetail } from './OrderSubscriptionDetail';
import styled from 'styled-components';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';

const PageWrapper = styled.div`
  width: 100%;
`;

export const OrderSubscriptionPage: React.FC = () => {
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState<number | null>(null);

  const handleViewDetails = (id: number) => {
    setSelectedSubscriptionId(id);
    window.scrollTo(0, 0); // Scroll to top when showing details
  };

  const handleBackToList = () => {
    setSelectedSubscriptionId(null);
  };

  return (
    <PageWrapper>
      {selectedSubscriptionId ? (
        <OrderSubscriptionDetail 
          subscriptionId={selectedSubscriptionId} 
          onBack={handleBackToList} 
        />
      ) : (
        <>
                <OrderSubscriptionList onViewDetails={handleViewDetails} />

       
        </>
      )}
    </PageWrapper>
  );
};