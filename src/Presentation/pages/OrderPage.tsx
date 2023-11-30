import type { FC } from 'react'
import { useAppSelector } from '../../Application/TypedReduxHooks.Root'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../Components/Ui/Action/Button'
import { IListItemPayment } from '../../Services/Interface/Stripe/IListItemPayment'
import { Payment } from '../../Services/Stripe/Payment'

const OrderPage: FC = () => {
	const { state } = useLocation()
	const navigation = useNavigate()
	const cart = useAppSelector((state) => state.Cart.data)

	const openStripeWindow = async (url: string) => {
		const stripeWindow = window.open(url, '_blank', 'width=1400, height=1000')
		if (stripeWindow) {
			stripeWindow.focus()
		}

		const checkStripeWindowClosed = setInterval(() => {
			if (stripeWindow && stripeWindow.closed) {
				navigation('/admin/checkout-success')
				clearInterval(checkStripeWindowClosed)
			}
		}, 10)
	}

	const handleSubmit = () => {
		const listItem: IListItemPayment[] = []
		cart.map((item) => {
			const newItem: IListItemPayment = {
				price_data: {
					currency: 'eur',
					product_data: {
						name: item.product.name,
						images: [item.product.imgPath],
					},
					unit_amount: item.product.price * 100,
				},
				quantity: item.number,
			}
			listItem.push(newItem)
		})

		const response = Payment(listItem)
		response.then((res) => {
			if (res) {
				openStripeWindow(res)
				//navigation(res.success_url)
			}
		})
	}

	return (
		<Section>
			<div className='header'>
				{' '}
				<h1>Finaliser votre commande</h1>{' '}
			</div>
			<div className='orderContaioner'>
				<div className='orderComponent'>
					{cart.map(({ product, number }, i) => (
						<div key={i} className={`cartCard`}>
							<img src={product.imgPath} />{' '}
							<div>
								<h3>{product.name}</h3>
								<p>{product.price} €</p>
							</div>
							<p className='multi'>{number ? 'x' + number : ''}</p>
						</div>
					))}
				</div>
				<div className='bar'>c</div>
				<div className='total'>
					<div>
						<h1>Total : </h1>
						<p>{state.totalPrice}</p>
					</div>
					<Button Name='Acheter' onClick={() => handleSubmit()} />
				</div>
			</div>
		</Section>
	)
}

const Section = styled.section`
	.orderContaioner {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 2rem;
	}

	.total {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.bar {
		width: 5px;
		height: 30vh;
		background-color: black;
	}
	.header {
		text-align: center;
		margin: 2rem 0;
		font-size: 30px;
		font-family: 'Pacifico', cursive;
	}
	.orderComponent {
		width: 600px;
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
	}
`

export default OrderPage
