export const PriceFormat = (price: number) => {
	const priceForm = price.toString().replace(',', '')
	return Number(priceForm).toFixed(2)
}
