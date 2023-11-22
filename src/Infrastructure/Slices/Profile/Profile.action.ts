import { IProfile } from '../../../Domain/Profile'
import { IActionPayload } from '../../Interfaces/IActionPayload'
import { ProfileState } from './Profile.inital'

export const ProfileActions = {
	addProfile: (state: ProfileState, { payload }: IActionPayload<IProfile>) => {
		state.data = payload
	},
	// removeProfile: (
	// 	state: ProfileState,
	// 	{ payload }: IActionPayload<{ id: number }>
	// ) => {
	// 	state.data = [...state.data.filter((state) => state.id != payload.id)]
	// },
}
