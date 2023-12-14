import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';

const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;