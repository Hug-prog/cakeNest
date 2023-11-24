import { configureStore } from '@reduxjs/toolkit'
import ProfileSlice from '../Slices/Profile/Profile.slice'
import ProductSlice from '../Slices/Product/Product.slice'

// Slices

const store = configureStore({
	reducer: {
		Profile: ProfileSlice,
		Products: ProductSlice,
	},
})

export interface RootState extends ReturnType<typeof store.getState> {}
export type AppDispatch = typeof store.dispatch

export default store
