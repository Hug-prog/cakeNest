import { IAuthRepository } from '../../../../Infrastructure/Interfaces/Repositories/IAuthRepository'

export interface LoginParams {
	dto: string
	repository: IAuthRepository
}

export const Login = async (params: LoginParams) => {
	const { dto, repository } = params
	return await repository.login(dto)
}
