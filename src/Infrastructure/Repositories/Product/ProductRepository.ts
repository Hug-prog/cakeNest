import { CreateProductDto } from '../../../Application/Dto/CreateProductDto'
import { CreateProductsDto } from '../../../Application/Dto/CreateProductsDto'
import { RemoveProductDto } from '../../../Application/Dto/RemoveProductDto'
import { IProduct } from '../../../Domain/Product'
import { dbContext } from '../../../Services/Api/FireBase-config'
import { IProductRepository } from '../../Interfaces/Repositories/IProductRepository'
import {
	DocumentData,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	arrayUnion,
} from 'firebase/firestore'

export class ProductRepository implements IProductRepository {
	async addProducts(dto: CreateProductsDto) {
		const docRef = doc(dbContext, 'products', dto.userId)
		await setDoc(docRef, { array: dto.menu })
	}

	async addProduct(dto: CreateProductDto) {
		const docRef = doc(dbContext, 'products', dto.userId)
		await updateDoc(docRef, { array: arrayUnion(dto.product) })
	}

	//@ts-ignore
	async getProduct(userId: string): Promise<DocumentData | IProduct[]> {
		const docRef = doc(dbContext, 'products', userId)
		const data = await getDoc(docRef)
		if (data.exists()) {
			return data.data()
		}
	}

	//@ts-ignore
	async removeProduct(dto: RemoveProductDto): Promise<string> {
		const docRef = doc(dbContext, 'products', dto.userId)
		await updateDoc(docRef, { array: dto.menu })
	}
}
