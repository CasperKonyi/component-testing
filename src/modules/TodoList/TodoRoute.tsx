import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TodoList = lazy(() => import('./TodoList'))

const TodoRoute = () => {
  return (
    <Routes>
      <Route path='/' index element={<TodoList />} />
    </Routes>
  )
}
export default TodoRoute
