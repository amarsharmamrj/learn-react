import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'

import useGetTodos from './hooks/getTodos'

function App() {
  const [count, setCount] = useState(0)

  const todos = useGetTodos('https://dummyjson.com/todos')
  console.log('todos:', todos)

  return (
    <>
      <Products />
    </>
  )
}

export default App
