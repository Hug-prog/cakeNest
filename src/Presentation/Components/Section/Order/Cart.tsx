import { useEffect, type FC, useState } from 'react'
import styled from 'styled-components'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../Application/TypedReduxHooks.Root'
import Button from '../../Ui/Action/Button'
import {
	editProduct,
	removeProduct,
} from '../../../../Infrastructure/Slices/Cart/Cart.slice'
import { CounterPrice } from '../../../../Services/Utils/CounterPrice'
import { ICart } from '../../../../Domain/Cart'
import BinSvg from '../../../Assets/Icons/Symbols/bin'

const Cart: FC = () => {
	const dispatch = useAppDispatch()
	const Cart = useAppSelector((state) => state.Cart.data)
	const Products = useAppSelector((state) => state.Products.data)
	const ActiveCard = useAppSelector((state) => state.ActiveCard.data)
	const [allPrice, setAllPrice] = useState<number>(0)

	const checkisInProducts = () => {
		Cart.map((productCart) => {
			const itemIndex = Products.findIndex(
				(product) => product.id === productCart.product.id
			)
			if (itemIndex == -1) {
				dispatch(removeProduct({ id: productCart.product.id }))
			}
		})
	}

	useEffect(() => {
		const prices: { price: number; productNumber: number }[] = []
		Cart.map((item) => {
			prices.push({ price: item.product.price, productNumber: item.number })
		})

		const TotalPrice = CounterPrice(prices)

		setAllPrice(TotalPrice)
	}, [Cart])

	useEffect(() => {
		checkisInProducts()
		Products.map((product) => {
			Cart.map((productCart) => {
				if (product.id === productCart.product.id) {
					if (
						product.name != productCart.product.name ||
						product.imgPath != productCart.product.imgPath ||
						product.price != productCart.product.price
					) {
						const newProductCart: ICart = {
							number: productCart.number,
							product: product,
						}
						dispatch(editProduct(newProductCart))
					}
				}
			})
		})
	}, [Products])

	return (
		<Div>
			<div>
				<h3>Total</h3> <h3>{allPrice + ' €'}</h3>
			</div>
			{Cart.length != 0 ? (
				Cart.map(({ product, number }, i) => (
					<div
						key={i}
						className={`cartCard ${
							ActiveCard.cardId === product.id ? 'activeCard' : ''
						} `}
					>
						<img src={product.imgPath} />{' '}
						<div>
							<h3>{product.name}</h3>
							<p>{product.price} €</p>
						</div>
						<p className='multi'>{number ? 'x' + number : ''}</p>
						<div className='buttonCart'>
							<Button
								Icon={BinSvg}
								onClick={() => dispatch(removeProduct({ id: product.id }))}
							/>
						</div>
					</div>
				))
			) : (
				<h3>Votre Commande est vide</h3>
			)}
		</Div>
	)
}

const Div = styled.div`
	width: 500px;
	box-shadow: 0 0 0.2rem gray;
	min-height: 80vh;
	text-align: center;
	div:first-child {
		display: flex;
		background-color: #130e0e;
		color: #67b6b9;
		padding: 10px;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	.cartCard {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		background-color: white;
		box-shadow: 0 0 0.2rem gray;
		margin: auto;
		margin-top: 1rem;
		position: relative;
		img {
			width: 80px;
			height: 100px;
			object-fit: contain;
		}
		p {
			color: #67b6b9;
		}
		h3 {
			width: 100px;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
	.activeCard {
		background-color: #67b6b9;
		p,
		h3 {
			color: white;
		}
	}
	h3 {
		font-family: 'Pacifico', cursive;
	}
`

export default Cart
