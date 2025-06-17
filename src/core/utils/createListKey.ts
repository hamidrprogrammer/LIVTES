/* eslint-disable @typescript-eslint/no-explicit-any */
// gmni/core/utils/createListKey.ts

/**
 * Creates a stable, sorted JSON string from an object to use as a unique key.
 * This is useful for caching lists based on their query parameters.
 * @param prefix - A string to prefix the key, preventing collisions (e.g., 'states', 'config').
 * @param params - The parameters object to stringify.
 * @returns A prefixed, stringified key. e.g., "config-{"countryId":56}"
 */
export const createListKey = (prefix: string, params?: object): string => {
  if (!params || Object.keys(params).length === 0) {
    return `${prefix}-default`;
  }

  // Sort keys to ensure that {a: 1, b: 2} and {b: 2, a: 1} produce the same key.
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((acc, key) => {
      // Type assertion to handle dynamic keys
      (acc as any)[key] = (params as any)[key];
      return acc;
    }, {} as Record<string, any>);

  return `${prefix}-${JSON.stringify(sortedParams)}`;
};