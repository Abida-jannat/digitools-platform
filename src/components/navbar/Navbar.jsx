
import Cart from "../../assets/Icon (Stroke).png";
const Navbar = () => {
  
  return (
    <>
       <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-violet-600">
          DigiTools
          </h1>
          
        <ul className="hidden md:flex items-center gap-6  text-gray-700 text-xs">
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </ul>

          <div className="flex items-center gap-6">
           <img src={Cart} alt="" />

          <button className="text-sm font-medium">
            Login
          </button>

          <button className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-violet-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>

    </>

  )
}

export default Navbar;