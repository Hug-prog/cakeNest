import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from '../../Presentation/Pages/TodoList'

const TodoListRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/'>
				<Route path='todolist' Component={TodoList} />
			</Route>
		</Routes>
	)
}

export default TodoListRoutes
