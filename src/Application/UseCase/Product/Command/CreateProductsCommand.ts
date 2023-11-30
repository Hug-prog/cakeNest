import { IProductRepository } from '../../../../Infrastructure/Interfaces/Repositories/IProductRepository'
import { CreateProductsDto } from '../../../Dto/CreateProductsDto'

export interface CreateProductsParams {
	dto: CreateProductsDto
	repository: IProductRepository
}

export const CreateProducts = async (params: CreateProductsParams) => {
	const { dto, repository } = params
	return await repository.addProducts(dto)
}
