// gmni/features/cart/stores/cartStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import type { ProductVariation } from '../../../core/types/api/shop';

export interface CartItem extends ProductVariation {
  quantity: string; // 👈 اصلاح‌شده
    subscription?: boolean

}

interface CartState {
  items: CartItem[];
addItem: (item: ProductVariation, quantity?: string | undefined) => void;
addItemSub: (item: ProductVariation, quantity?: string | undefined) => void;
  removeItem: (itemId: number) => void;
  updateItemQuantity: (itemId: number, quantity: string) => void;
  clearCart: () => void;
  getItemCount: () => string;
  getTotalPrice: () => string;
    updateItems: (updatedItems: ProductVariation[]) => void; // New Action


  
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // افزودن محصول به سبد یا افزایش تعداد آن
     addItem: (item, quantity = "1") =>
  set(
    produce((state: CartState) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        // تبدیل به عدد برای جمع زدن درست
        const currentQty = parseInt(existingItem.quantity, 10);
        const addedQty = parseInt(quantity ?? "1", 10);
        existingItem.quantity = String(currentQty + addedQty);
      } else {
        state.items.push({ ...item, quantity });
      }
    })
  ),
 addItemSub: (item, quantity = "1") =>
  set(
    produce((state: CartState) => {
       if (!item.subscriptionPrices || item.subscriptionPrices.length === 0) {
              // console.error("addItemSub: محصول فاقد اطلاعات اشتراک است.");
              return;
            }

         
            // اگر وجود نداشت، آیتم جدید را با تعداد مشخص شده اضافه کن
            state.items.push({ ...item, quantity, subscription: true });
    })
  ),
      // حذف کامل یک محصول از سبد
      removeItem: (itemId) =>
        set(
          produce((state: CartState) => {
            state.items = state.items.filter((i) => i.id !== itemId);
          })
        ),

      // آپدیت کردن تعداد یک محصول
      updateItemQuantity: (itemId, quantity) =>
        set(
          produce((state: CartState) => {
            const item = state.items.find((i) => i.id === itemId);
            console.log('=========item===========================');
            console.log(item);
            console.log('========item============================');
            if (item) {
                const nu =parseInt(quantity);
              if (nu > 0) {
                item.quantity = quantity;
              } else {
                // اگر تعداد صفر شد، آیتم را حذف کن
                state.items = state.items.filter((i) => i.id !== itemId);
              }
            }
          })
        ),
 updateItems: (updatedItems: ProductVariation[]) =>
        set(
          produce((state: CartState) => {
            updatedItems.forEach(updatedItem => {
              const existingItemIndex = state.items.findIndex(i => i.id === updatedItem.id);
              if (existingItemIndex !== -1) {
                // Preserve the quantity from the old item
                const originalQuantity = state.items[existingItemIndex].quantity;
                const originalsubscriptionPrices = state.items[existingItemIndex].subscriptionPrices;
                const originaltype = state.items[existingItemIndex].type;

                // Update the item with new data, but keep the original quantity
                state.items[existingItemIndex] = {
                  ...updatedItem,
                  quantity: originalQuantity,
                  subscriptionPrices:originalsubscriptionPrices,
                  type:originaltype,
                  subscription:  Array.isArray(originalsubscriptionPrices) && originalsubscriptionPrices.length > 0?true:false
                };
              }
            });
          })
        ),
           getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          return total + (item.sale_price.gross_value * parseInt(item.quantity, 10));
        }, 0).toString();
      },
      // پاک کردن کل سبد خرید
      clearCart: () => set({ items: [] }),
      
      // گرفتن تعداد کل آیتم‌ها در سبد
      getItemCount: () => {
return get().items.reduce((total, item) => total + parseInt(item.quantity, 10), 0).toString();
      },
      
      // محاسبه قیمت کل
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          return total + (item.sale_price.gross_value * parseInt(item.quantity, 10));
        }, 0).toString();
      }
    }),
    {
      name: 'cart-storage', // نام برای ذخیره‌سازی در localStorage
    }
  )
);