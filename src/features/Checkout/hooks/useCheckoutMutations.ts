import { useMutation, useQueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { bulkAddToBasket, createOrderFromBasket } from '../services/checkoutApi';
import type {
  BulkAddBasketPayload,
  BulkAddBasketResponse,
  CreateOrderFromBasketPayload,
  CreateOrderFromBasketResponse,
} from '../../../core/types/api/checkout';
import type { ApiError } from '../../../core/httpClient/httpClient';
import { useCartStore } from '../../cart/store/cartStore';

// Query keys for invalidation upon successful order creation
import { userQueryKeys } from '../../user/hooks/useUserQueries';
import { orderQueryKeys } from '../../orders/hooks/useOrderQueries';

/**
 * Hook for creating an order from the user's basket.
 */
export function useCreateOrderFromBasketMutation(
  options?: Omit<UseMutationOptions<CreateOrderFromBasketResponse, ApiError, CreateOrderFromBasketPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  const clearCart = useCartStore(state => state.clearCart);

  return useMutation<CreateOrderFromBasketResponse, ApiError, CreateOrderFromBasketPayload>({
    mutationFn: createOrderFromBasket,
    onSuccess: (data, variables, context) => {
      // On successful order creation:
      // 1. Clear the user's cart
      clearCart();

      // 2. Invalidate queries that are now stale, like user's order history and profile (e.g., wallet balance might change)
      queryClient.invalidateQueries({ queryKey: orderQueryKeys.all });
      queryClient.invalidateQueries({ queryKey: userQueryKeys.profile() });
      
       
      
      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Failed to create order:', error);

      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
}
export function useBulkAddBasketMutation(
  options?: Omit<UseMutationOptions<BulkAddBasketResponse, ApiError, BulkAddBasketPayload>, 'mutationFn'>
) {
  const queryClient = useQueryClient();
  const addItem = useCartStore(state => state.addItem);

  return useMutation<BulkAddBasketResponse, ApiError, BulkAddBasketPayload>({
    mutationFn: bulkAddToBasket,
    onSuccess: (data, variables, context) => {
      // After a successful bulk add, you should update the client-side cart state.
      // A robust way is to refetch the entire cart from the server.
      // A simpler way for now is to manually add the items to the zustand store,
      // though this might not reflect the exact server state.
       

      // We will simply show an alert here. For a real app, you would
      // likely refetch the cart or update the Zustand store based on the API response.
      
      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Failed to add items to basket:', error);
      // Call original onError if provided
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
}