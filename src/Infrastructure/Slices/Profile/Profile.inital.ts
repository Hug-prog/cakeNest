import { IProfile } from '../../../Domain/Profile'

export interface ProfileState {
	data: IProfile
	status: 'idle' | 'pending' | 'success' | 'failed'
	isLoading: boolean
	error: string | null
}

export const initialProfileState: ProfileState = {
	data: {} as IProfile,
	status: 'idle',
	isLoading: false,
	error: null,
}
