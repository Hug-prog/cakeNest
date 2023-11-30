import type { FC } from 'react'
import Button from '../Components/Ui/Action/Button'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../Application/TypedReduxHooks.Root'
import { addProducts } from '../../Infrastructure/Slices/Product/Product.slice'

const CheckoutSuccess: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = () => {
		dispatch(addProducts([]))
		navigate('/admin/Products')
	}
	return (
		<div>
			<h1>voici le reçu de votre commande </h1>
			<Button Name='revenir au menu' onClick={() => handleSubmit()} />
		</div>
	)
}

export default CheckoutSuccess
