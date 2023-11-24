import { IProduct } from '../../../Domain/Product'

interface IError {
	name: string
	message: string
}

export const ProductVerifForm = (product: IProduct): IError[] => {
	const errors: IError[] = []

	if (!product.name && !product.imgPath && !product.price) {
		errors.push({
			name: 'productForm',
			message: 'Veuillez entrer tous les champs',
		})
	}

	if (!product.name) {
		errors.push({
			name: 'productName',
			message: 'Veuillez entrer le nom du produit',
		})
	}

	if (!product.imgPath) {
		errors.push({
			name: 'productImagePath',
			message: "Veuillez entrer l'url de l'image",
		})
	}

	if (!product.price) {
		errors.push({
			name: 'productPrice',
			message: 'Veuillez entrer le prix du produit',
		})
	}

	return errors
}
