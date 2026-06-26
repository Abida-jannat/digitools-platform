
import { Suspense, useState} from 'react'
import './App.css'
 import { ToastContainer } from 'react-toastify';
import Banner from './components/navbar/Banner'

import Navbar from './components/navbar/Navbar'
import Products from './components/navbar/products/Products'
import StatsBanner from './components/navbar/StatsBanner'

import Step from './components/navbar/step/Step'
import Pricing from './components/navbar/pricing/Pricing'
import Ready from './components/navbar/ready/Ready'
import Footer from './components/navbar/footer/Footer'

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
  
}


function App() {
  
  const productPromise = fetchProduct();
  const [cart, setCart] = useState([]);

  return (
    <>
    
      <Navbar cartCount={cart.length}></Navbar>
      <Banner></Banner>
      <StatsBanner></StatsBanner>
     
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Products
          productPromise={productPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>
      <Step></Step>
      <Pricing></Pricing>
      <Ready></Ready>
      <Footer></Footer>

      
       <ToastContainer/>

    </>
  )
}

export default App
