import { IProductRepository } from '../../../../Infrastructure/Interfaces/Repositories/IProductRepository'
import { CreateProductsDto } from '../../../Dto/CreateProductsDto'

export interface CreateProductParams {
	dto: CreateProductsDto
	repository: IProductRepository
}

export const CreateProduct = async (params: CreateProductParams) => {
	const { dto, repository } = params
	return await repository.addProduct(dto)
}
