import { create } from 'zustand';
import { produce } from 'immer';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import {
  getProductVariations,
  getProductCategoriesTree,
  listProductVariations as fetchProductVariationsListService,
} from '../services/productApi';
import type {
  ProductVariation,
  ProductCategory,
  GetProductVariationsParams,
  GetProductCategoriesTreeParams,
  ListProductVariationsParams,
  ProductVariationsResponse,
  ProductCategoriesTreeResponse,
  ListProductVariationsResponse,
} from '../../../core/types/api/shop';
import type { ApiError } from '../../../core/httpClient/httpClient';
import type { PaginationLinks, Meta } from '../../../core/types/api/common'; // Assuming common types are defined

// Helper to create a unique key for list parameters
const createListKey = (params: ListProductVariationsParams): string => {
  // Simple stable stringification for object keys.
  // For more complex objects, a more robust solution might be needed.
  return JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    acc[key as keyof ListProductVariationsParams] = params[key as keyof ListProductVariationsParams];
    return acc;
  }, {} as ListProductVariationsParams));
};

interface ProductVariationsState {
  data: ProductVariation[] | null;
  isLoading: boolean;
  error: ApiError | null;
  countryId?: string;
}

interface ProductVariationListsState {
    data: ProductVariation[] | null;
    links: PaginationLinks | null;
    meta: Meta | null;
    isLoading: boolean;
    error: ApiError | null;
}

interface ProductStoreState {
  // State for product variations fetched by product ID
  productVariationsById: Record<string, ProductVariationsState>;
  // State for the product categories tree
  categoriesTree: {
    data: ProductCategory[] | null;
    isLoading: boolean;
    error: ApiError | null;
  };
  // State for lists of product variations, keyed by stringified params
  productVariationLists: Record<string, ProductVariationListsState>;
}

interface ProductStoreActions {
  fetchProductVariations: (productId: string, params: GetProductVariationsParams) => Promise<void>;
  fetchProductCategoriesTree: (params?: GetProductCategoriesTreeParams) => Promise<void>;
  fetchProductVariationList: (params: ListProductVariationsParams) => Promise<void>;
  clearProductVariationList: (params: ListProductVariationsParams) => void;
  clearProductVariationsById: (productId: string) => void;
}

const initialState: ProductStoreState = {
  productVariationsById: {},
  categoriesTree: {
    data: null,
    isLoading: false,
    error: null,
  },
  productVariationLists: {},
};

export const useProductStore = create<ProductStoreState & ProductStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      /**
       * Fetches product variations for a specific product ID and country.
       * Stores the result, loading, and error states in `productVariationsById`.
       */
      fetchProductVariations: async (productId, params) => {
        set(state => {
          state.productVariationsById[productId] = {
            ...(state.productVariationsById[productId] || { data: null, error: null }), // Preserve existing data/error if any
            isLoading: true,
            error: null, // Clear previous error
            countryId: params.countryId as string,
          };
        });
        try {
          const response = await getProductVariations(productId, params);
          set(state => {
            state.productVariationsById[productId] = {
              data: response.data,
              isLoading: false,
              error: null,
              countryId: params.countryId as string,
            };
          });
        } catch (error) {
          set(state => {
            state.productVariationsById[productId] = {
              ...(state.productVariationsById[productId] || { data: null }),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch product variations for ID ${productId}:`, error);
        }
      },

      /**
       * Fetches the product categories tree.
       * Stores the result, loading, and error states in `categoriesTree`.
       */
      fetchProductCategoriesTree: async (params) => {
        set(state => {
          state.categoriesTree.isLoading = true;
          state.categoriesTree.error = null;
        });
        try {
          const response = await getProductCategoriesTree(params);
          set(state => {
            state.categoriesTree.data = response.data;
            state.categoriesTree.isLoading = false;
          });
        } catch (error) {
          set(state => {
            state.categoriesTree.isLoading = false;
            state.categoriesTree.error = error as ApiError;
          });
          console.error('Failed to fetch product categories tree:', error);
        }
      },

      /**
       * Fetches a list of product variations based on provided parameters.
       * Stores the result, loading, and error states in `productVariationLists`.
       * Uses a stringified version of params as a key for caching different lists.
       */
      fetchProductVariationList: async (params) => {
        const listKey = createListKey(params);
        set(state => {
          state.productVariationLists[listKey] = {
            ...(state.productVariationLists[listKey] || { data: null, links: null, meta: null, error: null }),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response = await fetchProductVariationsListService(params);
          set(state => {
            state.productVariationLists[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.productVariationLists[listKey] = {
              ...(state.productVariationLists[listKey] || { data: null, links: null, meta: null }),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch product variation list for params ${listKey}:`, error);
        }
      },

      /**
       * Clears a specific product variation list from the store.
       */
      clearProductVariationList: (params) => {
        const listKey = createListKey(params);
        set(state => {
          delete state.productVariationLists[listKey];
        });
      },
      
      /**
       * Clears product variations for a specific product ID from the store.
       */
      clearProductVariationsById: (productId) => {
        set(state => {
          delete state.productVariationsById[productId];
        });
      },
    }),
    'ProductStore' // Name for DevTools and logger
  )
);

// Selectors for the ProductStore
// Using `state => state.foo` for simple selectors.
// For more complex selectors or ones that need memoization (outside of component scope), `reselect` could be used.

/**
 * Selects the state for product variations of a specific product ID.
 * Returns an object with data, isLoading, error, and countryId.
 */
export const selectProductVariationsById = (productId: string) => (state: ProductStoreState): ProductVariationsState | undefined =>
  state.productVariationsById[productId];

/**
 * Selects the product categories tree state.
 * Returns an object with data, isLoading, and error.
 */
export const selectCategoriesTree = (state: ProductStoreState) => state.categoriesTree;

/**
 * Selects a specific list of product variations based on its parameter key.
 * Returns an object with data, links, meta, isLoading, and error.
 */
export const selectProductVariationListByKey = (listKey: string) => (state: ProductStoreState): ProductVariationListsState | undefined =>
  state.productVariationLists[listKey];


// Example of a selector that derives data: get all product variation IDs currently loaded
// This is more for demonstration; direct state access is often simpler with Zustand.
// For complex derivations, especially across multiple state slices, createSelector from reselect is good.
// const selectAllFetchedProductVariationIds = (state: ProductStoreState) => Object.keys(state.productVariationsById);
