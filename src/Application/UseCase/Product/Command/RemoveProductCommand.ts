import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductRepository } from '../../../../Infrastructure/Repositories/Product/ProductRepository'
import { RemoveProductDto } from '../../../Dto/RemoveProductDto'

export interface RemoveProductCommandParams {
	dto: RemoveProductDto
	repository: ProductRepository
}

export const RemoveProductCommand =
	createAsyncThunk<string,RemoveProductCommandParams>(
		'product/delete',
		async (params) => {
			const { dto, repository } = params
			return await repository.
		}
	)
