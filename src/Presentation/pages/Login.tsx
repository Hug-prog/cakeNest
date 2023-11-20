import type { FC } from 'react'
import LoginForm from '../Components/Form/LoginForm'

const Login: FC = () => {
	return (
		<section>
			<h1>Bienvenue chez nous</h1>
			<h3>Connectez-vous</h3>
			<LoginForm />
		</section>
	)
}

export default Login
