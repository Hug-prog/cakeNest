import type { FC } from 'react'
import styled from 'styled-components'
import Button from '../Ui/Action/Button'
import { ICupcakeCard } from '../../../Domain/CupcakeCard'

const OrderCard: FC<ICupcakeCard> = ({ name, price, imgPath }) => {
	return (
		<Card>
			<img src={imgPath} alt='img' />
			<h2>{name}</h2>
			<div>
				<h5>{price} €</h5>
				<Button Name='Ajouter' />
			</div>
		</Card>
	)
}

const Card = styled.section`
	padding: 1rem;
	background-color: white;
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	width: 250px;
	border-radius: 10px;
	h2 {
		font-family: 'Pacifico', cursive;
	}
	img {
		width: 100%;
		height: 200px;
	}
	div {
		margin: 5px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;

		h5 {
			color: #67b6b9;
		}

		.btn {
			padding: 0.1rem 1.5rem;
			border-radius: 5px;
			background-color: #67b6b9;
			color: white;
			border: none;
		}
	}
`

export default OrderCard
