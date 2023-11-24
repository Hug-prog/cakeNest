import { IActiveCard } from '../../Interfaces/IActiveCard'

export interface ActiveCardState {
	data: IActiveCard
	status: 'idle' | 'pending' | 'success' | 'failed'
	isLoading: boolean
	error: string | null
}

export const initialActiveCardState: ActiveCardState = {
	data: {} as IActiveCard,
	status: 'idle',
	isLoading: false,
	error: null,
}
