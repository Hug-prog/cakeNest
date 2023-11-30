import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'
import EuroSvg from '../../Assets/Icons/Symbols/euro'
import PhotoSvg from '../../Assets/Icons/Symbols/photo'
import ProductSvg from '../../Assets/Icons/Symbols/product'
import { IProduct } from '../../../Domain/Product'
import { ProductVerifForm } from '../../../Application/Verif/Product/ProductFormVerif'
import { toastError, toastSucces } from '../../../Services/ToastProvider/Toast'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../Application/TypedReduxHooks.Root'
import { addProduct } from '../../../Infrastructure/Slices/Product/Product.slice'
import styled from 'styled-components'
import uuid from 'react-uuid'
import {
	CreateProduct,
	CreateProductParams,
} from '../../../Application/UseCase/Product/Command/CreateProductCommand'
import { ProductRepository } from '../../../Infrastructure/Repositories/Product/ProductRepository'

const ProductForm: FC = () => {
	const dispatch = useAppDispatch()
	const [product, setProduct] = useState<IProduct>()
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const profile = useAppSelector((state) => state.Profile)

	const changeSubmit = (state: boolean) => {
		setIsSubmitting(state)
	}

	const handleErrors = (error?: string, errorName?: string) => {
		changeSubmit(false)
		error && errorName
			? toastError(error, errorName)
			: toastError('Une erreur est survenue', 'ErreurMission')
	}

	const handleSubmit = () => {
		if (isSubmitting) return

		changeSubmit(true)

		if (ProductVerifForm(product as IProduct).length > 0)
			return ProductVerifForm(product as IProduct).map(({ message, name }) => {
				handleErrors(message, name)
			})

		if (product) {
			const newUuid = uuid()

			const newProduct: IProduct = {
				id: newUuid,
				imgPath: product.imgPath,
				name: product.name,
				price: product.price,
			}

			dispatch(addProduct(newProduct))

			const params: CreateProductParams = {
				dto: { product: newProduct, userId: profile.data.name },
				repository: new ProductRepository(),
			}

			CreateProduct(params)

			toastSucces('Ajouté avec succès !', 'success')
			setProduct({ imgPath: '', name: '', price: 0, id: '' })
			changeSubmit(false)
		}
	}

	return (
		<Div>
			<div className={`${product?.imgPath ? 'activeImg' : 'noImg'}`}>
				{product?.imgPath ? (
					<img src={product.imgPath} alt='img' />
				) : (
					<p>Aucune image</p>
				)}
			</div>
			<div>
				<Input
					name='name'
					value={product?.name}
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
					value={product?.imgPath}
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
					value={product?.price}
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
				<Button
					Name='Ajouter un nouveau produit au menu'
					onClick={handleSubmit}
				/>
			</div>
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

export default ProductForm
