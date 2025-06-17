// ge/lib/shared/stores/toastStore.ts
import { create } from 'zustand';

type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  isOpen: boolean;
  message: string;
  type: ToastType;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isOpen: false,
  message: '',
  type: 'info',
  showToast: (message, type = 'info') => set({ isOpen: true, message, type }),
  hideToast: () => set({ isOpen: false, message: '', type: 'info' }),
}));

// Function to easily trigger the toast from anywhere
export const showToast = (message: string, type: ToastType = 'error') => {
  useToastStore.getState().showToast(message, type);
};