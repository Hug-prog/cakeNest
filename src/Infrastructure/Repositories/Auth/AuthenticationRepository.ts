import { IProfile } from '../../../Domain/Profile'
import { IAuthRepository } from '../../Interfaces/Repositories/IAuthRepository'
import { DocumentData, doc, getDoc, setDoc } from 'firebase/firestore'
import { IAuthDto } from '../../Interfaces/IAuthDto'
import { dbContext } from '../../../Services/Api/FireBase-config'

export class Auth implements IAuthRepository {
	async register(dto: IProfile) {
		const docRef = doc(dbContext, 'users', dto.name)
		const data = {
			userName: dto.name,
		}
		await setDoc(docRef, data)
	}
	//@ts-ignore
	async login(id: string): Promise<DocumentData | IAuthDto> {
		const docRef = doc(dbContext, 'users', id)
		const data = await getDoc(docRef)
		if (data.exists()) {
			return data.data()
		}
	}
	//@ts-ignore
	async getUser(id: string): Promise<DocumentData | IAuthDto> {
		const docRef = doc(dbContext, 'users', id)
		const data = await getDoc(docRef)
		if (data.exists()) {
			return data.data()
		}
	}
}
