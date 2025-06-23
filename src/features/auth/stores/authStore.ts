/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { applyStoreMiddlewares } from '../../../core/middleware/zustandMiddleware';
import { login as loginService } from '../services/authApi';
import type { LoginPayload, LoginResponse, UserProfile } from '../../../core/types/api/auth';
import type { ApiError } from '../../../core/httpClient/httpClient';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user: UserProfile | null;
  isLoading: boolean;
  error: ApiError | null;
  
}

interface AuthActions {
  login: (payload: LoginPayload) => Promise<boolean>;
  logout: () => void;
  setTokens: (tokens: { accessToken: string; refreshToken?: string }) => void;
  clearAuthError: () => void;
  
}

const decodeJwt = (token: string): { exp?: number; [key: string]: any } | null => {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

const isTokenValid = (token: string | null): boolean => {
  if (!token) {
     
    return false;
  }
  const decoded = decodeJwt(token);
  if (!decoded || !decoded.exp) {
     
    return false;
  }
  const now = Date.now();
  const isValid = decoded.exp * 1000 > now;
   
  return isValid;
};
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};
export const useAuthStore = create<AuthState & AuthActions>()(
  applyStoreMiddlewares(
    persist(
      (set, get) => ({
        ...initialState,

        login: async (payload) => {
          set({ isLoading: true, error: null });
          try {
            const response: LoginResponse = await loginService(payload);
            const { data } = response;

            set({
              accessToken: data.token,
              refreshToken: data.token || null,
              isAuthenticated: true,
              user: data.user,
              isLoading: false,
              error: null,
            });

            // useUserProfileStore.getState().clearUserProfile();
            // useUserProfileStore.setState(userState => {
            //     userState.profile.data = user;
            //     userState.profile.isLoading = false;
            //     userState.profile.error = null;
            // });

            if (typeof window !== 'undefined') {
                localStorage.setItem('authToken', data.token);
               
            }

            return true;
          } catch (error) {
            const apiError = error as ApiError;
            set({
              isLoading: false,
              error: apiError,
              isAuthenticated: false,
              user: null,
              accessToken: null,
              refreshToken: null,
            });
            console.error('Login failed:', apiError);
            return false;
          }
        },

        logout: () => {
          set({ ...initialState });
          
          if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
          }
          // useUserProfileStore.getState().clearUserProfile();

           if (typeof window !== 'undefined') {
             window.dispatchEvent(new CustomEvent('auth:logout', { detail: { reason: 'User initiated logout' } }));
           }
        },

        setTokens: ({ accessToken, refreshToken: newRefreshToken }) => {
          const decodedToken = decodeJwt(accessToken);
          const isAuth = !!decodedToken && (decodedToken.exp ? decodedToken.exp * 1000 > Date.now() : true);

          set(state => {
            state.accessToken = accessToken;
            if (newRefreshToken !== undefined) {
              state.refreshToken = newRefreshToken;
            }
            state.isAuthenticated = isAuth;
            if (!isAuth) {
              state.user = null;
              console.warn('Setting new token, but it appears to be expired or invalid.');
            }
          });
           if (typeof window !== 'undefined') {
                localStorage.setItem('authToken', accessToken);
                if (newRefreshToken) localStorage.setItem('refreshToken', newRefreshToken);
                else if (newRefreshToken === null) localStorage.removeItem('refreshToken');
            }
        },
        
        clearAuthError: () => {
          set({ error: null });
        },

      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          isAuthenticated: state.isAuthenticated,
          user: state.user,
        }),
      onRehydrateStorage: (state) => {
  return (currentState, error) => {
    if (error) {
      console.error("AuthStore: An error occurred during rehydration:", error);
    } else if (currentState) {
      const token = currentState.accessToken;
      if (token) {
        const decoded = decodeJwt(token);
        if (!decoded || (decoded.exp && decoded.exp * 1000 < Date.now())) {
          console.warn("AuthStore: Rehydrated token is expired or invalid. Clearing auth state.");
          currentState.isAuthenticated = false;
          currentState.accessToken = null;
          currentState.refreshToken = null;
          currentState.user = null;
        }
      }
      // Do NOT call set(currentState) here!
      // Instead, just mutate currentState as needed.
      // Zustand will automatically update the store with the returned state or mutated currentState.
    }
  };
},
      }
    ),
    'AuthStore'
  )
);

// selectors
export const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated;
export const selectCurrentUser = (state: AuthState) => state.user;
export const selectAccessToken = (state: AuthState) => state.accessToken;
export const selectAuthIsLoading = (state: AuthState) => state.isLoading;
export const selectAuthError = (state: AuthState) => state.error;