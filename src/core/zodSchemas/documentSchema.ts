import { z } from "zod";
import { PaginationLinksSchema ,MetaSchema} from "./shopSchema";

const PersonSchema = z.object({
  id: z.number().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  full_name: z.string().optional().nullable(),
  company_name: z.string().optional().nullable(),
  created_by: z.any().optional().nullable(),
});

const UserSchema = z.object({
  id: z.number().optional().nullable(),
  invoice_contact_group_id: z.number().optional().nullable(),
  sponsor_id: z.any().optional().nullable(),
  avatar: z.string().optional().nullable(),
  content_hash: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  telephone_number: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  discount_ratio: z.number().optional().nullable(),
  person: PersonSchema.optional().nullable(),
});

const DocumentTranslateSchema = z.object({
  document_type_id: z.number().optional().nullable(),
  locale: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
});

const DocumentTypeSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  translate: z.array(DocumentTranslateSchema).optional().nullable(),
});

export const DocumentsEntrySchema = z.object({
  id: z.number().optional().nullable(),
  order_type: z.string().optional().nullable(),
  order_id: z.number().optional().nullable(),
  file_id: z.number().optional().nullable(),
  user_id: z.number().optional().nullable(),
  document_type_id: z.number().optional().nullable(),
  number: z.string().optional().nullable(),
  _data: z
    .object({
      created_date: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
  created_at: z.string().optional().nullable(),
  updated_at: z.string().optional().nullable(),
  created_by_id: z.number().optional().nullable(),
  created_by_fullname: z.string().optional().nullable(),
  created_by: UserSchema.optional().nullable(),
  user: UserSchema.optional().nullable(),
  documentType: DocumentTypeSchema.optional().nullable(),
  link: z.string().optional().nullable(),
});
export type  DocumentsEntryResponse =z.infer<typeof DocumentsEntrySchema>;
export const DocumentsResponseSchema = z.object({
  data: z.array(DocumentsEntrySchema).optional().nullable(),
   links: PaginationLinksSchema.optional().nullable(),
  meta: MetaSchema.optional().nullable(),
});
