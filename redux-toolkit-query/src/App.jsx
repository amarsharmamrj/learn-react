import { useState } from 'react'
import Recipes from './components/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Recipes: Redux Toolkit-Query Example</h1>
        <Recipes />
      </div>
    </>
  )
}

export default App
