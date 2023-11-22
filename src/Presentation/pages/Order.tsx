import type { FC } from 'react'
import styled from 'styled-components'
import OrderCard from '../Components/Card/OrderCard'
import img from '../Assets/cupcake-item.png'
import { ICupcakeCard } from '../../Domain/CupcakeCard'
const Order: FC = () => {
	const list: ICupcakeCard[] = [
		{
			imgPath: img,
			name: 'Cake 1',
			price: 1.983893,
		},
		{
			imgPath: img,
			name: 'Cake 2',
			price: 2.0939,
		},
		{
			imgPath: img,
			name: 'Cake 3',
			price: 3.0,
		},
		{
			imgPath: img,
			name: 'Cake 4',
			price: 3.603,
		},
		{
			imgPath: img,
			name: 'Cake 3',
			price: 4.8,
		},
	]

	return (
		<Section>
			{/* <OrderCard name='ChocoBliss' price={7.5} imgPath={img} /> */}
			{list.map((cake) => (
				<OrderCard name={cake.name} price={cake.price} imgPath={cake.imgPath} />
			))}
		</Section>
	)
}

const Section = styled.section`
	padding: 2rem 3rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 3rem;
`

export default Order
