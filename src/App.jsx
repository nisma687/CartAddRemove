
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Foods from './components/Foods'
import { CartProvider } from 'react-use-cart'



function App() {


  return (
    <CartProvider>
       <Navbar />
      <div className='text-center'>
      <h1 className='text-xl 
      font-semibold uppercase
      text-center'>
        Chicken Crisper@R Combos 
      </h1>
      <h2>
        <span className='text-xl
        font-semibold uppercase
        text-center'>
          Find Everything from our Menu.Find the fajitas and famous Crisper
        </span>
      </h2>
      </div>
      <Outlet />
      <div className='flex '>
      <div className=''>
      <Foods />
      </div>
      
      </div>
     
   
    </CartProvider>
    // <Task/>
  )
}

export default App
