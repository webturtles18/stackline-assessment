import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, Sales } from '../types/product-details'

interface ProductState {
  product: Product | null;
  loading: boolean,
  error: string | null | undefined,
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Product | null>) {
      state.product = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export const { setLoading } = productSlice.actions;
export const { setError } = productSlice.actions;

export const getSales = (state: { productState: ProductState }): Sales[] | null | undefined =>
  state.productState.product?.sales;

export default productSlice.reducer;
