import { createSlice } from '@reduxjs/toolkit'
import { CartActions } from './Cart.action'
import { initialCartState } from './Cart.inital'
import { CartReducers } from './Cart.thunk'

export const CartSlice = createSlice({
	name: 'Cart',
	reducers: CartActions,
	initialState: initialCartState,
	extraReducers: CartReducers,
})

export const { addProduct, removeProduct, addmultipleProduct, editProduct } =
	CartSlice.actions

export default CartSlice.reducer
