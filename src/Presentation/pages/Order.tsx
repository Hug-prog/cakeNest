import type { FC } from 'react'
import styled from 'styled-components'
import OrderCard from '../Components/Card/OrderCard'
import ActionProduct from '../Components/Section/Order/ActionProduct'
import { useAppSelector } from '../../Application/TypedReduxHooks.Root'
const Order: FC = () => {
	const profile = useAppSelector((state) => state.Profile)
	const products = useAppSelector((state) => state.Products)
	// console.log(profile.data.isAdmin)

	return (
		<Section>
			{/* <OrderCard name='ChocoBliss' price={7.5} imgPath={img} /> */}
			{products.data.length === 0 ? (
				profile.data.isAdmin ? (
					<div>
						<h1>Le menu est vide ?</h1>
					</div>
				) : (
					<div>
						<h1>Victime de notre succès</h1>
						<h2>De nouvelle recette sont en préparation, revenez vite !</h2>
					</div>
				)
			) : (
				products.data.map((cake, i) => <OrderCard key={i} product={cake} />)
			)}
			{profile.data.isAdmin ? <ActionProduct /> : ''}
		</Section>
	)
}

const Section = styled.section`
	padding-top: 2rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 3rem;
	height: 96%;
	h1,
	h2 {
		font-family: 'Pacifico', cursive;
	}
`

export default Order
