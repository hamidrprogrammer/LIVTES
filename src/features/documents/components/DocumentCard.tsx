// File: ge/new project/features/documents/components/DocumentCard.tsx
import React from 'react';
import * as S from './DocumentCard.styles';
import { DocumentsEntryResponse } from '@/core/zodSchemas/documentSchema';

interface DocumentCardProps {
  document: DocumentsEntryResponse;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const formattedDate = new Date(document.created_at ?? "").toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
const API_BASE_URL = 'https://api.lumivitaeglobal.com'; // Should be in an env file

  return (
    <S.CardWrapper>
      <S.FileInfo>
        {/* File name and created date */}
        <div>
         
          <S.FileDate>Created on: {formattedDate}</S.FileDate>
        </div>
      </S.FileInfo>

      {/* Additional Metadata */}
      <S.MetaInfo>
        <S.MetaItem><strong>ID:</strong> {document.id ?? '-'}</S.MetaItem>
        <S.MetaItem><strong>Order ID:</strong> {document.order_id ?? '-'}</S.MetaItem>
        <S.MetaItem><strong>Number:</strong> {document.number ?? '-'}</S.MetaItem>
        <S.MetaItem><strong>Type:</strong> {document.documentType?.name ?? '-'}</S.MetaItem>
      </S.MetaInfo>

      {/* Download Button */}
      <S.DownloadButton href={API_BASE_URL+document.link} target="_blank" download>
        Download
      </S.DownloadButton>
    </S.CardWrapper>
  );
};
