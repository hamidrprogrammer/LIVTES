// File: ge/new project/features/documents/components/DocumentListPage.tsx
'use client';

import React, { useState } from 'react';
import { useGetDocuments } from '../hooks/useDocumentQueries';
import { DocumentCard } from './DocumentCard';
import * as S from './DocumentListPage.styles';
import { Pagination } from '@/lib/shared/components/Pagination/Pagination';
import { styled } from 'styled-components';

// Assuming you have a Pagination component like in the old project
// import { Pagination } from '@/lib/shared/components/pagination'; 
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;
export const DocumentListPage: React.FC = () => {
  const [page, setPage] = useState(1);
     const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // یا هر تعداد که میخواهید در هر صفحه نمایش داده شود
  const { data, isLoading, isError, error } = useGetDocuments({ page:currentPage, per_page: itemsPerPage });

  if (isLoading) {
    return <S.LoadingWrapper>Loading documents...</S.LoadingWrapper>;
  }

  if (isError) {
    return <S.ErrorMessage>Error: {error.message}</S.ErrorMessage>;
  }

  return (
    <S.Wrapper>
      {data?.data.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
      {/* {data && data.totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )} 
      */}
         <Pagination
                            currentPage={currentPage}
                            totalPages={data?.meta?.last_page??1}
                            onPageChange={setCurrentPage}
                          />
            
    </S.Wrapper>
  );
};