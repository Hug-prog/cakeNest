import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'
import { useAppDispatch } from '../../../Application/TypedReduxHooks.Root'
import { addProfile } from '../../../Infrastructure/Slices/Profile/Profile.slice'
import { useNavigate } from 'react-router-dom'

const LoginForm: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [name, setName] = useState<string>()

	const handleSubmit = () => {
		if (name) {
			dispatch(addProfile({ name: name }))
			setName('')
			navigate('/order')
		} else alert('access  denied')
	}

	return (
		<div>
			<Input
				value={name}
				name='Entre votre prénom'
				onChange={(e) => setName(e.target.value)}
			/>
			<Button Name='Accéder à votre espace' onClick={handleSubmit} />
		</div>
	)
}

export default LoginForm
