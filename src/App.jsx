import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
