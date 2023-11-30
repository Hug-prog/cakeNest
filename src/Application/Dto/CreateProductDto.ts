import { IProduct } from '../../Domain/Product'

export interface CreateProductDto {
	product: IProduct
	userId: string
}
