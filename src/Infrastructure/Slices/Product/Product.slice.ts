import { createSlice } from '@reduxjs/toolkit'
import { ProductActions } from './Product.action'
import { initialProductState } from './Product.inital'
import { ProductReducers } from './Product.thunk'

export const ProductSlice = createSlice({
	name: 'Product',
	reducers: ProductActions,
	initialState: initialProductState,
	extraReducers: ProductReducers,
})

export const { addProduct, removeProduct, editProduct, addProducts } =
	ProductSlice.actions

export default ProductSlice.reducer
