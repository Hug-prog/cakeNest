import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'

const LoginForm: FC = () => {
	const [name, setName] = useState<string>()

	const verif = () => {
		if (!name) alert('Name please')
		return true
	}

	const handleSubmit = () => {
		if (verif()) alert(name)
		else console.log('access denied')
	}

	return (
		<div>
			<Input
				value={name}
				name='Entre votre prénom'
				onChange={(e) => {
					e.preventDefault()
					setName(e.target.value)
				}}
			/>
			<Button Name='Accéder à votre espace' onClick={handleSubmit} />
		</div>
	)
}

export default LoginForm
