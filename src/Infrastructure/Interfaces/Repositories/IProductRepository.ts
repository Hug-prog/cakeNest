import { CreateProductsDto } from '../../../Application/Dto/CreateProductsDto'
import { RemoveProductDto } from '../../../Application/Dto/RemoveProductDto'
import { IProduct } from '../../../Domain/Product'

export interface IProductRepository {
	//@ts-ignore
	getProduct(userId: string): Promise<DocumentData | IProduct[]>
	removeProduct(dto: RemoveProductDto): Promise<string>
	addProduct(dto: CreateProductsDto): void
	addProducts(dto: CreateProductsDto): void
}
