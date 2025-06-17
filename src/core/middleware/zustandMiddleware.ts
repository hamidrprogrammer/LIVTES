/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  type StateCreator,
  type StoreMutatorIdentifier,
  type Mutate,
} from 'zustand';
import {
  devtools as devtoolsMiddleware,
  subscribeWithSelector as subscribeWithSelectorMiddleware,
  persist as persistMiddleware,
} from 'zustand/middleware';
import { immer as immerMiddleware } from 'zustand/middleware/immer';

// Logger middleware
export const logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  config: StateCreator<T, Mps, Mcs>,
  name?: string
): StateCreator<T, Mps, Mcs> => (set, get, api) => {
  const loggedSet: typeof set = (...args) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(name ? `[${name}] Action:` : 'Action:', args);
    }
    (set as any)(...args);
    if (process.env.NODE_ENV !== 'production') {
      console.log(name ? `[${name}] New State:` : 'New state:', get());
    }
  };
  return config(loggedSet, get, api);
};

// Unified middleware pipeline
export const applyStoreMiddlewares = <
  TState extends object
>(
  config: StateCreator<
    TState,
    [['zustand/immer', never]],
    [['zustand/persist', unknown], ['zustand/subscribeWithSelector', never], ['zustand/devtools', never]]
  >,
  storeName: string
) => {
  return devtoolsMiddleware(
    subscribeWithSelectorMiddleware(
      persistMiddleware(
        logger(
          immerMiddleware(config),
          storeName
        ),
        {
          name: storeName,
          partialize: (state: any) => ({
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
          }),
          storage: {
            getItem: (name) => localStorage.getItem(name),
            setItem: (name, value) => localStorage.setItem(name, value),
            removeItem: (name) => localStorage.removeItem(name),
          },
        }
      )
    ),
    {
      name: storeName,
      enabled: process.env.NODE_ENV !== 'production',
    }
  );
};
