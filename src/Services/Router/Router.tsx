import type { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Presentation/pages/Home'
import Login from '../../Presentation/pages/Login'
import Order from '../../Presentation/pages/Order'
import Error404 from '../../Presentation/pages/Error404'

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route path='home' Component={Home} />
						<Route path='login' Component={Login} />
						<Route path='order' Component={Order} />
						<Route path='*' Component={Error404} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
