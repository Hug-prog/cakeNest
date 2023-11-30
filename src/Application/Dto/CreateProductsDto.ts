import { IProduct } from '../../Domain/Product'

export interface CreateProductsDto {
	menu: IProduct[]
	userId: string
}
