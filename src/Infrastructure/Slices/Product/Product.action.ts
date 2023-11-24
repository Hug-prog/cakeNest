import { IProduct } from '../../../Domain/Product'
import { IActionPayload } from '../../Interfaces/IActionPayload'
import { ProductState } from './Product.inital'

export const ProductActions = {
	addProduct: (state: ProductState, { payload }: IActionPayload<IProduct>) => {
		state.data = [...state.data, payload]
	},

	editProduct: (state: ProductState, { payload }: IActionPayload<IProduct>) => {
		const itemIndex = state.data.findIndex(({ id }) => id === payload.id)
		if (itemIndex !== -1) {
			state.data[itemIndex] = payload
		}
		return state
	},

	removeProduct: (
		state: ProductState,
		{ payload }: IActionPayload<{ id: string }>
	) => {
		state.data = [...state.data.filter((state) => state.id != payload.id)]
	},
}
