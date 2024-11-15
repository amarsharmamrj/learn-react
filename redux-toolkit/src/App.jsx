import { useState } from 'react'
import Counter from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Redux Toolkit Example</p>
      <Counter />
    </>
  )
}

export default App
