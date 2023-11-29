import { ProductRepository } from '../../../../Infrastructure/Repositories/Product/ProductRepository'
import { RemoveProductDto } from '../../../Dto/RemoveProductDto'

export interface RemoveProductCommandParams {
	dto: RemoveProductDto
	repository: ProductRepository
}

export const RemoveProduct = async (params: RemoveProductCommandParams) => {
	const { dto, repository } = params
	return await repository.removeProduct(dto)
}
