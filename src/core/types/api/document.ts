// File: ge/new project/core/types/api/document.ts

import { DocumentsResponseSchema } from "@/core/zodSchemas/documentSchema";
import z from "zod";

export interface Document {
  id: number;
  name: string;
  originalName: string;
  url: string;
  size: number;
  mime: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetDocumentsParams {
  page?: number;
  per_page?: number;
}

export type  GetDocumentsResponse =z.infer<typeof DocumentsResponseSchema>;