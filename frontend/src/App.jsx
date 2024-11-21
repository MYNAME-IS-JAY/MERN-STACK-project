import { Outlet } from 'react-router-dom'
import'./App.css'
import Header from "./components/header/Header"
import NewsLetter from './pages/home/NewsLetter'

function App() {
  

  return (
     <div className='max-w-screen-2*1 min-h-screen max-auto bg-orange-50/50'>
      <Header/>
     <Outlet/>
     
     </div>
  )
}

export default App
