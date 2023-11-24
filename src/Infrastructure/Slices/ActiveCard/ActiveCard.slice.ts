import { createSlice } from '@reduxjs/toolkit'
import { ActiveCardActions } from './ActiveCard.action'
import { initialActiveCardState } from './ActiveCard.inital'

export const ActiveCardSlice = createSlice({
	name: 'ActiveCard',
	reducers: ActiveCardActions,
	initialState: initialActiveCardState,
})

export const { activeCard } = ActiveCardSlice.actions

export default ActiveCardSlice.reducer
