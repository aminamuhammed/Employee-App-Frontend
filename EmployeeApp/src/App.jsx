import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import EmployeeForm from './components/EmployeeForm'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/eform' element={<EmployeeForm/>} />
      </Routes>
    </>
  )
}

export default App
