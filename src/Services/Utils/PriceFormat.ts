export const PriceFormat = (price: number): number => {
	const priceForm = price.toString().replace(',', '')
	return Number(priceForm).toFixed(2)
}
