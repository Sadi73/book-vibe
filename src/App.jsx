
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className='w-[80%] mx-auto'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
