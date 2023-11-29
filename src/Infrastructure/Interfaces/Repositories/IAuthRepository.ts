import { DocumentData } from 'firebase/firestore'
import { IProfile } from '../../../Domain/Profile'
import { IAuthDto } from '../IAuthDto'

export interface IAuthRepository {
	register(dto: IProfile): void
	login(id: string): Promise<DocumentData | IAuthDto>
	getUser(id: string): Promise<DocumentData | IAuthDto>
}
