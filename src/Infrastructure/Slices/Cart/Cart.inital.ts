import { ICart } from '../../../Domain/Cart'

export interface CartState {
	data: ICart[]
	status: 'idle' | 'pending' | 'success' | 'failed'
	isLoading: boolean
	error: string | null
}

export const initialCartState: CartState = {
	data: [] as ICart[],
	status: 'idle',
	isLoading: false,
	error: null,
}
