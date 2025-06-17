// File: features/documents/hooks/useDocumentQueries.ts

import { useQuery } from '@tanstack/react-query';
import { documentApi } from '../services/documentApi';
import { GetDocumentsParams, GetDocumentsResponse } from '@/core/types/api/document';

export const useGetDocuments = (params: GetDocumentsParams) => {
  return useQuery<GetDocumentsResponse>({
    queryKey: ['documents', params], // ✅ Use tuple directly
    queryFn: () => documentApi.getDocuments(params),
    enabled: !!params, // Prevents query if params is undefined/null
    placeholderData: (previousData) => previousData,
  });
};
