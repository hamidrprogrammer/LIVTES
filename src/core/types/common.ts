export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  statusCode: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: string[];
}

export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // Add other common product fields
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add other common user profile fields
}

// Add more common types as identified during the review


