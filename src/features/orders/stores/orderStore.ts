import { create } from 'zustand';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import {
  getOrderSubscription as getOrderSubscriptionService,
  listOrderSubscriptions as listOrderSubscriptionsService,
  listOrderSales as listOrderSalesService,
} from '../services/api/orderApi';
import type {
  OrderSubscription,
  OrderSubscriptionResponseData,
  OrderSubscriptionListResponse,
  OrderSaleList,
  GetOrderParams,
  GetOrderSaleParams,
} from '../../../core/types/api/order';
import type { ApiError } from '../../../core/httpClient/httpClient';
import type { PaginationLinks, Meta } from '../../../core/types/api/common';

const createListKey = (params?: GetOrderParams | GetOrderSaleParams): string => {
  if (!params || Object.keys(params).length === 0) return 'default';
  return JSON.stringify(Object.keys(params).sort().reduce((acc, key) => {
    ...acc,
    [key as keyof typeof params]: params[key as keyof typeof params],
  }, {}));
};

interface OrderSubscriptionDetailState {
  data: OrderDetails | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface OrderListState<T> {
  data: T[];
  links: PaginationLinks | null;
  meta: Meta | null;
  isLoading: boolean;
  error: ApiError | null;
}

interface OrderStoreState {
  orderSubscriptionsById: Record<string | number, OrderSubscriptionDetailState>;
  orderSubscriptionLists: Record<string, OrderListState<OrderSubscription>>;
  orderSaleLists: Record<string, OrderListState<OrderSale>>;
}

interface OrderStoreActions {
  fetchOrderSubscriptionDetail: (subscriptionId: string | number) => Promise<void>;
  fetchOrderSubscriptionList: (params?: GetOrderParams) => Promise<void>;
  fetchOrderSaleList: (params?: GetOrderSaleParams) => Promise<void>;
  clearOrderSubscriptionDetail: (subscriptionId: string | number) => void;
  clearOrderSubscriptionList: (params?: GetOrderParams) => void;
  clearOrderSaleList: (params?: GetOrderSaleParams) => void;
  clearAllOrderData: () => void;
}

const initialDetailState: OrderSubscriptionDetailState = {
  data: null,
  isLoading: false,
  error: null,
};

const initialListState = <T>(): OrderListState<T> => ({
    data: null,
    links: null,
    meta: null,
    isLoading: false,
    error: null,
});

const initialState: OrderStoreState = {
  orderSubscriptionsById: {},
  orderSubscriptionLists: {},
  orderSaleLists: {},
};

export const useOrderStore = create<OrderStoreState & OrderStoreActions>()(
  applyStoreMiddlewares(
    (set, get) => ({
      ...initialState,

      fetchOrderSubscriptionDetail: async (subscriptionId) => {
        set(state => {
          state.orderSubscriptionsById[subscriptionId] = {
            ...(state.orderSubscriptionsById[subscriptionId] || initialDetailState),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response: OrderSubscriptionResponseData = await getOrderSubscriptionService(subscriptionId);
          set(state => {
            state.orderSubscriptionsById[subscriptionId] = {
              data: response.data,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.orderSubscriptionsById[subscriptionId] = {
              ...(state.orderSubscriptionsById[subscriptionId] || {data: null}),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch order subscription detail for ID ${subscriptionId}:`, error);
        }
      },

      fetchOrderSubscriptionList: async (params) => {
        const listKey = createListKey(params);
        set(state => {
          state.orderSubscriptionLists[listKey] = {
            ...(state.orderSubscriptionLists[listKey] || initialListState<OrderSubscription>()),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response = await listOrderSubscriptionsService(params);
          set(state => {
            state.orderSubscriptionLists[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.orderSubscriptionLists[listKey] = {
              ...(state.orderSubscriptionLists[listKey] || initialListState<OrderSubscription>()),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch order subscription list for params ${listKey}:`, error);
        }
      },

      fetchOrderSaleList: async (params) => {
        const listKey = createListKey(params);
        set(state => {
          state.orderSaleLists[listKey] = {
            ...(state.orderSaleLists[listKey] || initialListState<OrderSale>()),
            isLoading: true,
            error: null,
          };
        });
        try {
          const response = await listOrderSalesService(params);
          set(state => {
            state.orderSaleLists[listKey] = {
              data: response.data,
              links: response.links,
              meta: response.meta,
              isLoading: false,
              error: null,
            };
          });
        } catch (error) {
          set(state => {
            state.orderSaleLists[listKey] = {
             ...(state.orderSaleLists[listKey] || initialListState<OrderSale>()),
              isLoading: false,
              error: error as ApiError,
            };
          });
          console.error(`Failed to fetch order sale list for params ${listKey}:`, error);
        }
      },
      
      clearOrderSubscriptionDetail: (subscriptionId) => {
        set(state => {
            delete state.orderSubscriptionsById[subscriptionId];
        });
      },

      clearOrderSubscriptionList: (params) => {
          const listKey = createListKey(params);
          set(state => {
              delete state.orderSubscriptionLists[listKey];
          });
      },

      clearOrderSaleList: (params) => {
          const listKey = createListKey(params);
          set(state => {
              delete state.orderSaleLists[listKey];
          });
      },
      
      clearAllOrderData: () => {
        set(initialState);
      },
    }),
    'OrderStore'
  )
);

export const selectOrderSubscriptionDetail = (subscriptionId: string | number) => (state: OrderStoreState): OrderSubscriptionDetailState | undefined =>
  state.orderSubscriptionsById[subscriptionId];

export const selectOrderSubscriptionList = (params?: GetOrderParams) => (state: OrderStoreState): OrderListState<OrderSubscription> | undefined =>
  state.orderSubscriptionLists[createListKey(params)];

export const selectOrderSaleList = (params?: GetOrderSaleParams) => (state: OrderStoreState): OrderListState<OrderSale> | undefined =>
  state.orderSaleLists[createListKey(params)];

if (typeof window !== 'undefined') {
  window.addEventListener('auth:logout', () => {
     
    useOrderStore.getState().clearAllOrderData();
  });
}
