import { useState, type FC, useEffect } from 'react'
import Input from '../Ui/input/Input'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../Application/TypedReduxHooks.Root'
import { IProduct } from '../../../Domain/Product'
import ProductSvg from '../../Assets/Icons/Symbols/product'
import PhotoSvg from '../../Assets/Icons/Symbols/photo'
import EuroSvg from '../../Assets/Icons/Symbols/euro'
import styled from 'styled-components'
import { editProduct } from '../../../Infrastructure/Slices/Product/Product.slice'
import Switch from '../Ui/Selection/Switch'

const EditForm: FC = () => {
	const dispatch = useAppDispatch()
	const activeCard = useAppSelector((state) => state.ActiveCard.data)
	const products = useAppSelector((state) => state.Products.data)

	const [product, setProduct] = useState<IProduct>()

	const handleChange = (value: boolean) => {
		//@ts-ignore
		setProduct((prev) => {
			const newState = { ...prev }
			if (newState) {
				newState.stock = value
			}
			return newState
		})
	}

	useEffect(() => {
		products.map((product) => {
			if (product.id === activeCard.cardId) {
				setProduct(product)
			}
		})
	}, [activeCard])

	useEffect(() => {
		if (product) dispatch(editProduct(product))
	}, [product])

	return (
		<Div>
			{product && (
				<>
					<div className={`${product?.imgPath ? 'activeImg' : 'noImg'}`}>
						{product.imgPath ? (
							<img src={product.imgPath} alt='img' />
						) : (
							<p>Aucune image</p>
						)}
					</div>
					<div>
						<Input
							name='name'
							value={product.name}
							Icon={ProductSvg}
							placeholder='Nom du produit'
							onChange={(e) =>
								//@ts-ignore
								setProduct((prev) => {
									const newState = { ...prev }
									if (newState) {
										newState.name = e.target.value
									}
									return newState
								})
							}
						/>
						<Input
							name='image'
							value={product.imgPath}
							Icon={PhotoSvg}
							placeholder="Lien URL d'une image"
							onChange={(e) =>
								//@ts-ignore
								setProduct((prev) => {
									const newState = { ...prev }
									if (newState) {
										newState.imgPath = e.target.value
									}
									return newState
								})
							}
						/>
						<Input
							name='price'
							value={product.price}
							Icon={EuroSvg}
							type='number'
							placeholder='Prix'
							onChange={(e) =>
								//@ts-ignore
								setProduct((prev) => {
									const newState = { ...prev }
									if (newState) {
										newState.price = Number(e.target.value)
									}
									return newState
								})
							}
						/>
						<Switch
							Icon={true}
							textActive='En stock'
							textInactive='En rupture'
							handleChange={handleChange}
						/>
					</div>
				</>
			)}
		</Div>
	)
}

const Div = styled.div`
	margin-left: 2rem;
	display: flex;
	align-items: center;
	gap: 2rem;

	div:last-child {
		width: 400px;
		.switch {
			margin-top: 1rem;
		}
		.switch .switch_container {
			div {
				width: 22px;
			}
		}
		.switch .switch_container .switch_right {
			margin: 8px 0px 8px 143px;
		}
	}

	.btn {
		margin-top: 1rem;
		background: #1eff1e;
		border: none;
		padding: 0.5rem 1rem;
	}

	.icon {
		margin-top: 1rem;
		padding: 0;
		div {
			background: #d9d9d9;
		}
	}

	.activeImg,
	.noImg {
		width: 250px;
		height: 150px;
	}

	.activeImg {
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.noImg {
		border: 1px solid black;
		position: relative;
		p {
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`

export default EditForm
