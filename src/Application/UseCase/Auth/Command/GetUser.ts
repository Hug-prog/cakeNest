import { IAuthRepository } from '../../../../Infrastructure/Interfaces/Repositories/IAuthRepository'

export interface getUserParams {
	dto: string
	repository: IAuthRepository
}

export const GetUser = async (params: getUserParams) => {
	const { dto, repository } = params
	return await repository.getUser(dto)
}
