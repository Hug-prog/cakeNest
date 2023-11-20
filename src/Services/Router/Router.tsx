import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import TodoListRoutes from './TodoList.Routes'

const Router: FC = () => {
	return (
		<>
			<BrowserRouter>
				<TodoListRoutes />
			</BrowserRouter>
		</>
	)
}

export default Router
