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

const LoginForm: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [name, setName] = useState<string>()

	const handleSubmit = () => {
		if (name) {
			const profile: IProfile = {
				name: name,
				isAdmin: false,
			}
			dispatch(addProfile(profile))
			setName('')
			navigate('/admin/order')
		} else alert('access  denied')
	}

	return (
		<Div>
			<Input
				Icon={ProfileSvg}
				value={name}
				name='Entre votre prénom'
				placeholder='Entrez votre prénom'
				onChange={(e) => setName(e.target.value)}
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
