import { type FC } from 'react'
import styled from 'styled-components'
import Button from '../Ui/Action/Button'
import { PriceFormat } from '../../../Services/Utils/PriceFormat'
import { IProduct } from '../../../Domain/Product'
import CrossSvg from '../../Assets/Icons/Symbols/cross'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../Application/TypedReduxHooks.Root'
import { removeProduct } from '../../../Infrastructure/Slices/Product/Product.slice'
import { activeCard } from '../../../Infrastructure/Slices/ActiveCard/ActiveCard.slice'
import {
	addProduct,
	addmultipleProduct,
} from '../../../Infrastructure/Slices/Cart/Cart.slice'

type OrderCardType = {
	product: IProduct
}

const OrderCard: FC<OrderCardType> = ({ product }) => {
	const dispatch = useAppDispatch()

	const Profile = useAppSelector((state) => state.Profile.data)
	const ActiveCard = useAppSelector((state) => state.ActiveCard.data)
	const Cart = useAppSelector((state) => state.Cart.data)

	const priceFormat = PriceFormat(product.price)

	const handelCheck = (product: IProduct) => {
		if (Cart.length != 0) {
			let isInCart: { isIn: boolean; productNumber: number } = {
				isIn: false,
				productNumber: 0,
			}
			Cart.map((itemCart) =>
				itemCart.product.id === product.id
					? (isInCart = { isIn: true, productNumber: itemCart.number })
					: ''
			)
			if (isInCart.isIn === false) {
				dispatch(
					addProduct({
						product: product,
						number: isInCart.productNumber + 1,
					})
				)
			} else {
				dispatch(
					addmultipleProduct({
						product: product,
						number: isInCart.productNumber + 1,
					})
				)
			}
		} else {
			dispatch(
				addProduct({
					product: product,
					number: 1,
				})
			)
		}
	}

	return (
		<Card
			$profile={ActiveCard.cardId === product.id}
			onClick={() => {
				Profile.isAdmin &&
					dispatch(activeCard({ cardId: product.id, isSelect: true }))
			}}
		>
			<div>
				{Profile.isAdmin ? (
					<Button
						Icon={CrossSvg}
						onClick={() => dispatch(removeProduct({ id: product.id }))}
					/>
				) : (
					''
				)}
			</div>
			<img src={product.imgPath} alt='img' />
			<h2>{product.name}</h2>
			{product.stock ? (
				<p></p>
			) : (
				<span className='breakup'>
					<p>Epuisé</p>
				</span>
			)}
			<div>
				<h5>{priceFormat} €</h5>
				<Button Name='Ajouter' onClick={() => handelCheck(product)} />
			</div>
		</Card>
	)
}

const Card = styled.section<{ $profile: boolean }>`
	padding: 1rem;
	//background-color: white;
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	width: 220px;
	border-radius: 10px;
	cursor: pointer;
	position: relative;

	background-color: ${(props) => (props.$profile ? '#67b6b9' : `white`)};

	.breakup {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 10px;
		background-color: #ffffffb8;
		opacity: 3;
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			background-color: red;
			padding: 1rem 2rem;
			rotate: -45deg;
			color: white;
		}
	}

	h2 {
		font-family: 'Pacifico', cursive;
		text-align: start;
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	img {
		margin-top: 1rem;
		width: 100%;
		height: 200px;
	}
	img:hover {
		transition: all 1s;
		transform: scale(1.1);
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
			background-color: ${(props) => (props.$profile ? '#FFF' : `#67b6b9`)};
			//background-color: #67b6b9;
			border: none;
			border-radius: 50px;
			svg {
				width: 10px;
				fill: ${(props) => (props.$profile ? '#67b6b9' : `#FFF`)};
			}
		}
	}
	div:last-child {
		margin: 5px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;

		h5 {
			color: ${(props) => (props.$profile ? '#FFF' : `#67b6b9`)};
		}

		.btn {
			padding: 0.1rem 1.5rem;
			border-radius: 5px;
			/* background-color: #67b6b9; */
			background-color: ${(props) => (props.$profile ? '#FFF' : `#67b6b9`)};
			color: ${(props) => (props.$profile ? '#67b6b9' : `#FFF`)};
			border: none;
		}
	}
`

export default OrderCard
