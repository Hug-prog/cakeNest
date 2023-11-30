import type { FC } from 'react'
import styled from 'styled-components'

const SuccessPayment: FC = () => {
	return (
		<Section>
			<div>
				<h1>Transaction réusi !</h1>
				<p>quitter la page pour continuer</p>
			</div>
		</Section>
	)
}

const Section = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		text-align: center;
		margin: 2rem 0;
		font-size: 30px;
		font-family: 'Pacifico', cursive;
	}
`

export default SuccessPayment
