// File: ge/new project/features/documents/services/documentApi.ts

import { httpClient, RequestOptions } from '@/core/httpClient/httpClient';
import { GetDocumentsParams, GetDocumentsResponse } from '@/core/types/api/document';
import { DocumentsResponseSchema } from '@/core/zodSchemas/documentSchema';
const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

const getDocuments = async (params: GetDocumentsParams,
    requestOptions?: RequestOptions
): Promise<GetDocumentsResponse> => {
  const queryString = new URLSearchParams(params as Record<string, string>).toString();
  const url = `${API_BASE_URL}/users/profile/documents?${queryString}`;
  return httpClient(url, requestOptions, DocumentsResponseSchema,);
};

export const documentApi = {
  getDocuments,
};