import { doc, getDoc, setDoc } from 'firebase/firestore'
import { dbContext } from './FireBase-config'
import { FakeProducts } from '../Faker/FakeProducts'

export const getUser = async (idUser: string) => {
	const docRef = doc(dbContext, 'users', idUser)
	const result = await getDoc(docRef)
	if (result.exists()) {
		console.log(result.data())

		return result.data()
	}
}

export const CreateUser = async (userId: string) => {
	const docRef = doc(dbContext, 'users', userId)
	const menu = FakeProducts
	const data = {
		userName: userId,
		menu: menu,
	}
	setDoc(docRef, data)
}
