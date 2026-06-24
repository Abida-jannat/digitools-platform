
import { Suspense } from 'react'
import './App.css'
import Banner from './components/navbar/Banner'

import Navbar from './components/navbar/Navbar'
import Products from './components/navbar/products/Products'
import StatsBanner from './components/navbar/StatsBanner'

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
  
}
function App() {
  const productPromise = fetchProduct();
  

  return (
    <>
    
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsBanner></StatsBanner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Products productPromise={productPromise} />
      </Suspense>

    </>
  )
}

export default App
