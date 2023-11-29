import { IProfile } from '../../../../Domain/Profile'
import { IAuthRepository } from '../../../../Infrastructure/Interfaces/Repositories/IAuthRepository'

export interface RegisterParams {
	dto: IProfile
	repository: IAuthRepository
}

export const Register = async (params: RegisterParams) => {
	const { dto, repository } = params
	return await repository.register(dto)
}
