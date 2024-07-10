import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signin/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signin'element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App