import { useEffect, type FC } from 'react'
import styled from 'styled-components'
import ProductCard from '../Components/Card/ProductCard'
import ActionProduct from '../Components/Section/Order/ActionProduct'
import {
	useAppDispatch,
	useAppSelector,
} from '../../Application/TypedReduxHooks.Root'
import Cart from '../Components/Section/Order/Cart'
import {
	GetProductQuery,
	GetProductQueryParams,
} from '../../Application/UseCase/Product/Query/GetProductQuery'
import { ProductRepository } from '../../Infrastructure/Repositories/Product/ProductRepository'
import { addProducts } from '../../Infrastructure/Slices/Product/Product.slice'
const Products: FC = () => {
	const dispatch = useAppDispatch()
	const profile = useAppSelector((state) => state.Profile)
	const products = useAppSelector((state) => state.Products)

	const getProducts = async () => {
		const param: GetProductQueryParams = {
			id: profile.data.name,
			repository: new ProductRepository(),
		}
		const data = GetProductQuery(param)
		//@ts-ignore
		dispatch(addProducts((await data).array))
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<Section>
			<Cart />
			<div className='emptyMenu'>
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
					products.data.map((cake, i) => <ProductCard key={i} product={cake} />)
				)}
				<div className='orderAction'>
					{profile.data.isAdmin ? <ActionProduct /> : ''}
				</div>
			</div>
		</Section>
	)
}

const Section = styled.section`
	display: flex;
	gap: 2rem;
	//align-items: center;
	.emptyMenu {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		gap: 3rem;
		width: 100%;
		min-height: 80vh;
		position: relative;
	}
	.orderAction {
		width: 100%;
		position: sticky;
		bottom: 0;
		left: 0;
	}

	h1,
	h2 {
		text-align: center;
		color: gray;
		font-size: 30px;
		font-family: 'Pacifico', cursive;
	}
`

export default Products
