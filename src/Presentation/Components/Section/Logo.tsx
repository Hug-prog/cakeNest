import type { FC } from 'react'
import styled from 'styled-components'
import cupcake from '../../Assets/cupcake.png'
const Logo: FC = () => {
	return (
		<Div>
			<Title1>CAKE</Title1>
			<Img src={cupcake} alt='img' />
			<Title1>NEST</Title1>
		</Div>
	)
}

const Title1 = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #67b6b9;
`

const Img = styled.img`
	width: 90px;
	height: 90px;
`

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`

export default Logo
