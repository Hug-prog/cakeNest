import type { FC } from 'react'
import styled from 'styled-components'
import Navigation from '../Section/Navigation'
import { Outlet } from 'react-router-dom'

const PrivateLayout: FC = () => {
	return (
		<Section>
			<header>
				<Navigation />
			</header>
			<div className='child'>
				<Outlet />
			</div>
		</Section>
	)
}

const Section = styled.section`
	background-color: #67b6b9;
	height: 96.2vh;
	padding: 1rem 2rem;
	.child {
		background-color: white;
		height: 80vh;
		overflow: scroll;
		border-radius: 0 0 5px 5px;
		box-shadow: inset 0 0 2rem black;
	}
`

export default PrivateLayout
