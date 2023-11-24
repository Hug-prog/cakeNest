import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'
import EuroSvg from '../../Assets/Icons/Symbols/euro'
import PhotoSvg from '../../Assets/Icons/Symbols/photo'
import ProductSvg from '../../Assets/Icons/Symbols/product'
import { IProduct } from '../../../Domain/Product'
import { ProductVerifForm } from '../../../Application/Verif/Product/ProductFormVerif'
import { toastError } from '../../../Services/ToastProvider/Toast'

export const ProductForm: FC = () => {
	const [product, setProduct] = useState<IProduct>()
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

	const changeSubmit = (state: boolean) => {
		setIsSubmitting(state)
	}

	const handleErrors = (error?: string, errorName?: string) => {
		changeSubmit(false)
		error && errorName
			? toastError(error, errorName)
			: toastError(
					'Une erreur est survenue lors de la création de la mission',
					'ErreurMission'
			  )
	}

	const handleSubmit = () => {
		if (isSubmitting) return
		changeSubmit(true)
		if (ProductVerifForm(product as IProduct).length > 0)
			return ProductVerifForm(product as IProduct).map(({ message, name }) => {
				handleErrors(message, name)
			})
	}

	return (
		<div>
			<div></div>
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
				<Button />
			</div>
		</div>
	)
}
