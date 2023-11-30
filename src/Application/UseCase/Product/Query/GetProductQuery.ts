import { ProductRepository } from '../../../../Infrastructure/Repositories/Product/ProductRepository'

export interface GetProductQueryParams {
	id: string
	repository: ProductRepository
}

export const GetProductQuery = async (params: GetProductQueryParams) => {
	const { id, repository } = params
	return await repository.getProduct(id)
}
