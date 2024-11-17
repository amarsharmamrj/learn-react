import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfiniteDropDownWindow from './components/InfiniteDropDownWindow'
import InfiniteDropDownDiv from './components/InfiniteDropDownDiv'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfiniteDropDownWindow />} />
          <Route path="/div" element={<InfiniteDropDownDiv />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
