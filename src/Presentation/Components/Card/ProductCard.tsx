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
import {
	RemoveProduct,
	RemoveProductCommandParams,
} from '../../../Application/UseCase/Product/Command/RemoveProductCommand'
import { ProductRepository } from '../../../Infrastructure/Repositories/Product/ProductRepository'

type ProductCardType = {
	product: IProduct
}

const ProductCard: FC<ProductCardType> = ({ product }) => {
	const dispatch = useAppDispatch()

	const Profile = useAppSelector((state) => state.Profile.data)
	const ActiveCard = useAppSelector((state) => state.ActiveCard.data)
	const Cart = useAppSelector((state) => state.Cart.data)
	const products = useAppSelector((state) => state.Products.data)

	const priceFormat = PriceFormat(product.price)

	const handleDelete = () => {
		dispatch(removeProduct({ id: product.id }))
		const newMenu = products.filter((state) => state.id !== product.id)
		const params: RemoveProductCommandParams = {
			dto: { menu: newMenu, userId: Profile.name },
			repository: new ProductRepository(),
		}
		RemoveProduct(params)
	}

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
					dispatch(activeCard({ cardId: product.id, isSelect: false }))
			}}
		>
			<div>
				{Profile.isAdmin ? (
					<Button Icon={CrossSvg} onClick={() => handleDelete()} />
				) : (
					''
				)}
			</div>
			<img src={product.imgPath} alt='img' />
			<h2>{product.name}</h2>
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

	background-color: ${(props) => (props.$profile ? '#67b6b9' : `white`)};

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

export default ProductCard
