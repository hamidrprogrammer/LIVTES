import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useProductStore, selectProductVariationsById } from '../stores/productStore';
import type { GetProductVariationsParams } from '../../../core/types/api/shop';

interface ProductDetailProps {
  productId: string;
  countryId: string; // Or get from a global user context/store
}

export const ProductDetailComponent: React.FC<ProductDetailProps> = ({ productId, countryId }) => {
  // Use the selector to get only the relevant part of the state for this product
  // `shallow` is used for comparison if the selector returns an object/array to prevent unnecessary re-renders
  // if other parts of the store change but this selected part remains shallowly equal.
  const { data, isLoading, error, countryId: storedCountryId } = useProductStore(
    selectProductVariationsById(productId),
    shallow
  ) || { data: null, isLoading: false, error: null, countryId: undefined }; // Default if undefined

  const fetchProductVariations = useProductStore(state => state.fetchProductVariations);

  useEffect(() => {
    // Fetch only if data is not present for this product OR if the countryId has changed
    if (!data || storedCountryId !== countryId) {
      const params: GetProductVariationsParams = { countryId };
      fetchProductVariations(productId, params);
    }
  }, [productId, countryId, fetchProductVariations, data, storedCountryId]);

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error loading product details: {error.message}</div>;
  }

  if (!data) {
    return <div>No product data available.</div>;
  }

  return (
    <div>
      <h2>Product Variations for ID: {productId} (Country: {countryId})</h2>
      {data.length === 0 && <p>No variations found for this product.</p>}
      <ul>
        {data.map(variation => (
          <li key={variation.id}>
            <h3>{variation.name} ({variation.number})</h3>
            <p>Price: {variation.sale_price.gross_value_string}</p>
            <p>Stock: {variation.quantity}</p>
            {variation.productVariationFiles && variation.productVariationFiles[0] && (
              <img src={variation.productVariationFiles[0].file} alt={variation.name} style={{width: '100px', height: 'auto'}} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
