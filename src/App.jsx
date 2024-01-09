
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Foods from './components/Foods'
import { CartProvider } from 'react-use-cart'



function App() {


  return (
    <CartProvider>
       <Navbar />
      <h1 className='text-xl text-center'>
        Task of Cart
      </h1>
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
