import { IProductRepository } from '../../../../Infrastructure/Interfaces/Repositories/IProductRepository'
import { CreateProductDto } from '../../../Dto/CreateProductDto'

export interface CreateProductParams {
	dto: CreateProductDto
	repository: IProductRepository
}

export const CreateProduct = async (params: CreateProductParams) => {
	const { dto, repository } = params
	return await repository.addProduct(dto)
}
