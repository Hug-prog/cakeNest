import Stripe from 'stripe'
import { IListItemPayment } from '../Interface/Stripe/IListItemPayment'

export const Payment = async (listItem: IListItemPayment[]) => {
	const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_API_KEY)

	const session = await stripe.checkout.sessions.create({
		line_items: listItem,
		mode: 'payment',
		success_url: 'http://localhost:5173/successPayment/',
		cancel_url: 'http://localhost:5173/admin/order',
	})

	return session.url
}
