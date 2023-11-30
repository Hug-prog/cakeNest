import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'
import { useAppDispatch } from '../../../Application/TypedReduxHooks.Root'
import { addProfile } from '../../../Infrastructure/Slices/Profile/Profile.slice'
import { useNavigate } from 'react-router-dom'
import ProfileSvg from '../../Assets/Icons/Symbols/profile'
import ArrowSvg from '../../Assets/Icons/Symbols/arrow'
import styled from 'styled-components'
import { IProfile } from '../../../Domain/Profile'
import {
	Login,
	LoginParams,
} from '../../../Application/UseCase/Auth/Command/Login'
import { Auth } from '../../../Infrastructure/Repositories/Auth/AuthenticationRepository'
import {
	Register,
	RegisterParams,
} from '../../../Application/UseCase/Auth/Command/Register'

import { ProductRepository } from '../../../Infrastructure/Repositories/Product/ProductRepository'
import {
	CreateProducts,
	CreateProductsParams,
} from '../../../Application/UseCase/Product/Command/CreateProductsCommand'
import { FakeProducts } from '../../../Services/Faker/FakeProducts'

const LoginForm: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [profile, setProfile] = useState<IProfile>()

	const handleSubmit = async () => {
		if (profile) {
			const loginProfile: LoginParams = {
				dto: profile.name,
				repository: new Auth(),
			}

			const auth = Login(loginProfile)

			if ((await auth) === undefined) {
				const registerProfile: RegisterParams = {
					dto: { name: profile.name, isAdmin: false },
					repository: new Auth(),
				}
				Register(registerProfile)

				const products: CreateProductsParams = {
					dto: { menu: FakeProducts, userId: profile.name },
					repository: new ProductRepository(),
				}
				CreateProducts(products)

				dispatch(addProfile(profile))
			} else {
				const objProfile: IProfile = {
					isAdmin: false,
					name: (await auth).userName,
				}
				dispatch(addProfile(objProfile))
			}

			setProfile({ name: '', isAdmin: false })

			navigate('/admin/products')
		} else alert('access  denied')
	}

	return (
		<Div>
			<Input
				Icon={ProfileSvg}
				value={profile?.name}
				name='Entre votre prénom'
				placeholder='Entrez votre prénom'
				onChange={(e) =>
					// @ts-ignore
					setProfile((prev) => {
						const newState = { ...prev }
						if (newState) {
							newState.name = e.target.value
						}
						return newState
					})
				}
			/>
			<Button Icon={ArrowSvg} Name='Mon espace' onClick={handleSubmit} />
		</Div>
	)
}

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 400px;
	margin: 1rem auto;
`

export default LoginForm
