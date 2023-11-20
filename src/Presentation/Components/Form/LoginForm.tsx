import { useState, type FC } from 'react'
import Input from '../Ui/input/Input'
import Button from '../Ui/Action/Button'

const LoginForm: FC = () => {
	const [name, setName] = useState<string>()

	const handleSubmit = () => {
		if (name) {
			alert(name + ' is login')
			setName('')
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
