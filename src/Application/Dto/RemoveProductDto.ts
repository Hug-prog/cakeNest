import { IProduct } from '../../Domain/Product'

export interface RemoveProductDto {
	menu: IProduct[]
	userId: string
}
