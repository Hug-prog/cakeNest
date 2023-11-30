import type { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Presentation/pages/Login'
import Products from '../../Presentation/pages/Products'
import Error404 from '../../Presentation/pages/Error404'
import PrivateLayout from '../../Presentation/Components/Layout/PrivateLayout'
import OrderPage from '../../Presentation/pages/OrderPage'
import CheckoutSuccess from '../../Presentation/pages/CheckoutSuccess'
import SuccessPayment from '../../Presentation/pages/SuccessPayment'

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route path='login' Component={Login} />
						<Route path='*' Component={Error404} />
						<Route path='successPayment' Component={SuccessPayment} />
					</Route>
					<Route path='/admin/' element={<PrivateLayout />}>
						<Route path='products' Component={Products} />
						<Route path='checkout-success' Component={CheckoutSuccess} />
						<Route path='order' Component={OrderPage} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
