import type { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Presentation/pages/Home'
import Login from '../../Presentation/pages/Login'

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route path='home' Component={Home} />
						<Route path='login' Component={Login} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
