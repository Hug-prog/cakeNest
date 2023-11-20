import type { FC } from 'react'
import Button from '../Components/Ui/Action/Button'
import { useNavigate } from 'react-router-dom'

const Error404: FC = () => {
	const navigate = useNavigate()
	return (
		<div>
			<h1>Url is bad</h1>
			<Button
				Name='back to login'
				onClick={() => {
					navigate('/login')
				}}
			/>
		</div>
	)
}

export default Error404
