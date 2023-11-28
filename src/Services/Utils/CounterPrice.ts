import { PriceFormat } from './PriceFormat'

export const CounterPrice = (
	allPrice: { price: number; productNumber: number }[]
): number => {
	let initialValue = 0
	allPrice.forEach((item) => {
		if (item.productNumber === 0) {
			initialValue += item.price
		} else {
			initialValue += item.price * item.productNumber
		}
	})

	return PriceFormat(initialValue)
}
