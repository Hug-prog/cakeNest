import { ICart } from '../../../Domain/Cart'
import { IActionPayload } from '../../Interfaces/IActionPayload'
import { CartState } from './Cart.inital'

export const CartActions = {
	addProduct: (state: CartState, { payload }: IActionPayload<ICart>) => {
		state.data = [...state.data, payload]
	},

	addmultipleProduct: (
		state: CartState,
		{ payload }: IActionPayload<ICart>
	) => {
		const itemIndex = state.data.findIndex(
			({ product }) => product.id === payload.product.id
		)
		if (itemIndex !== -1) {
			state.data[itemIndex] = payload
		}
	},

	editProduct: (state: CartState, { payload }: IActionPayload<ICart>) => {
		const itemIndex = state.data.findIndex(
			({ product }) => product.id === payload.product.id
		)
		if (itemIndex !== -1) {
			state.data[itemIndex] = payload
		}
		return state
	},

	removeProduct: (
		state: CartState,
		{ payload }: IActionPayload<{ id: string }>
	) => {
		state.data = [
			...state.data.filter((state) => state.product.id != payload.id),
		]
	},
}
