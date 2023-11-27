import type { FC } from 'react'
import styled from 'styled-components'

const Cart: FC = () => {
	return (
		<Div>
			<div>
				<h3>Total</h3> <h3>0.00€</h3>
			</div>
			<h3>Votre Commande est vide</h3>
		</Div>
	)
}

const Div = styled.div`
	width: 300px;
	box-shadow: inset 0 0 2rem black;
	height: 80vh;
	text-align: center;
	div {
		display: flex;
		background-color: #130e0e;
		color: #67b6b9;
		padding: 10px;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	h3 {
		font-family: 'Pacifico', cursive;
	}
`

export default Cart
