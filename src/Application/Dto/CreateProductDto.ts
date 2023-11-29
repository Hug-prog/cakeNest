import { IProduct } from '../../Domain/Product'

export interface CreateProductDto {
	menu: IProduct[]
	newProduct: IProduct
	userId: string
}
