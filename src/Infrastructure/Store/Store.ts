import { configureStore } from '@reduxjs/toolkit'
import ProfileSlice from '../Slices/Profile/Profile.slice'
import ProductSlice from '../Slices/Product/Product.slice'
import ActiveCardSlice from '../Slices/ActiveCard/ActiveCard.slice'
import CartSlice from '../Slices/Cart/Cart.slice'

// Slices

const store = configureStore({
	reducer: {
		Profile: ProfileSlice,
		Products: ProductSlice,
		ActiveCard: ActiveCardSlice,
		Cart: CartSlice,
	},
})

export interface RootState extends ReturnType<typeof store.getState> {}
export type AppDispatch = typeof store.dispatch

export default store
