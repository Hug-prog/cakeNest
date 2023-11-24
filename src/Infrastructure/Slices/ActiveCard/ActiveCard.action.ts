import { IActionPayload } from '../../Interfaces/IActionPayload'
import { IActiveCard } from '../../Interfaces/IActiveCard'
import { ActiveCardState } from './ActiveCard.inital'

export const ActiveCardActions = {
	activeCard: (
		state: ActiveCardState,
		{ payload }: IActionPayload<IActiveCard>
	) => {
		state.data = payload
	},

	// removeProduct: (
	// 	state: ActiveCardState,
	// 	{ payload }: IActionPayload<{ id: string }>
	// ) => {
	// 	state.data = [...state.data.filter((state) => state.id != payload.id)]
	// },
}
