import { IProduct } from '../../../Domain/Product'

export interface ProductState {
	data: IProduct[]
	status: 'idle' | 'pending' | 'success' | 'failed'
	isLoading: boolean
	error: string | null
}

export const initialProductState: ProductState = {
	data: [] as IProduct[],
	status: 'idle',
	isLoading: false,
	error: null,
}
