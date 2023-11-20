import type { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Presentation/pages/Home'

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route path='home' Component={Home} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
