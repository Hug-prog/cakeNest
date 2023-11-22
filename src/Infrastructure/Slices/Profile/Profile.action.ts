import { IProfile } from '../../../Domain/Profile'
import { IActionPayload } from '../../Interfaces/IActionPayload'
import { ProfileState } from './Profile.inital'

export const ProfileActions = {
	addProfile: (state: ProfileState, { payload }: IActionPayload<IProfile>) => {
		state.data = payload
	},
	actionAdmin: (
		state: ProfileState,
		{ payload }: IActionPayload<{ isAdmin: boolean }>
	) => {
		state.data.isAdmin = payload.isAdmin
	},
	// removeProfile: (
	// 	state: ProfileState,
	// 	{ payload }: IActionPayload<{ id: number }>
	// ) => {
	// 	state.data = [...state.data.filter((state) => state.id != payload.id)]
	// },
}
