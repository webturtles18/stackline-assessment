import { Dispatch } from 'redux';
import { setProduct, setLoading, setError } from '../store/productSlice';
import { AppThunk } from '../store';

const baseUrl = "http://localhost:3004/"
export const fetchProduct = (id: string): AppThunk => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await fetch(`${baseUrl}products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await response.json();
            dispatch(setProduct(data));
            dispatch(setError(null));
        } catch (error: any) {
            dispatch(setProduct(null));
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };
};