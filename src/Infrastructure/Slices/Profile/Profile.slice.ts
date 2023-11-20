import { createSlice } from '@reduxjs/toolkit'
import { ProfileActions } from './Profile.action'
import { initialProfileState } from './Profile.inital'
import { ProfileReducers } from './Profile.thunk'

export const ProfileSlice = createSlice({
	name: 'Profile',
	reducers: ProfileActions,
	initialState: initialProfileState,
	extraReducers: ProfileReducers,
})

export const { addProfile } = ProfileSlice.actions

export default ProfileSlice.reducer
