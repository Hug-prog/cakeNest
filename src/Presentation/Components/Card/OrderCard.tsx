import type { FC } from 'react'
import styled from 'styled-components'
import Button from '../Ui/Action/Button'
import { PriceFormat } from '../../../Services/Utils/PriceFormat'
import { IProduct } from '../../../Domain/Product'
import CrossSvg from '../../Assets/Icons/Symbols/cross'
import { useAppDispatch } from '../../../Application/TypedReduxHooks.Root'
import { removeProduct } from '../../../Infrastructure/Slices/Product/Product.slice'

type OrderCardType = {
	product: IProduct
}

const OrderCard: FC<OrderCardType> = ({ product }) => {
	const dispatch = useAppDispatch()
	const priceFormat = PriceFormat(product.price)
	return (
		<Card>
			<div>
				<Button
					Icon={CrossSvg}
					onClick={() => dispatch(removeProduct({ id: product.id }))}
				/>
			</div>
			<img src={product.imgPath} alt='img' />
			<h2>{product.name}</h2>
			<div>
				<h5>{priceFormat} €</h5>
				<Button Name='Ajouter' />
			</div>
		</Card>
	)
}

const Card = styled.section`
	padding: 1rem;
	background-color: white;
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	width: 220px;
	border-radius: 10px;
	h2 {
		font-family: 'Pacifico', cursive;
	}
	img {
		margin-top: 1rem;
		width: 100%;
		height: 200px;
	}
	div:first-child {
		display: flex;
		justify-content: end;
		.icon {
			width: 20px;
			cursor: pointer;
			padding: 0;
		}
		.btn {
			background-color: #67b6b9;
			border: none;
			border-radius: 50px;
			svg {
				width: 10px;
				fill: white;
			}
		}
	}
	div:last-child {
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
