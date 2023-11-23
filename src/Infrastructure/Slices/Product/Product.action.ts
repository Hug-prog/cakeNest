import { IProduct } from '../../../Domain/Product'
import { IActionPayload } from '../../Interfaces/IActionPayload'
import { ProductState } from './Product.inital'

export const ProductActions = {
	addProduct: (state: ProductState, { payload }: IActionPayload<IProduct>) => {
		state.data = [...state.data, payload]
	},

	removeProduct: (
		state: ProductState,
		{ payload }: IActionPayload<{ id: string }>
	) => {
		state.data = [...state.data.filter((state) => state.id != payload.id)]
	},
}
