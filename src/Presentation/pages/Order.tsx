import type { FC } from 'react'
import { useAppSelector } from '../../Application/TypedReduxHooks.Root'
import Button from '../Components/Ui/Action/Button'
import { useNavigate } from 'react-router-dom'

const Order: FC = () => {
	const profile = useAppSelector((state) => state.Profile)
	const navigate = useNavigate()
	return (
		<div>
			<h1>Hello {profile.data.name}</h1>
			<Button Name='logout' onClick={() => navigate('/login')} />
		</div>
	)
}

export default Order
