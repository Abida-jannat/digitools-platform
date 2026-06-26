import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-300 pt-20 pb-8">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Logo */}
          <div className="md:col-span-2">

            <h2 className="text-5xl font-bold text-white">
              DigiTools
            </h2>

            <p className="mt-6 text-gray-400 leading-7 max-w-sm">
              Premium digital tools for creators,
              professionals, and businesses.
              Work smarter with our suite of powerful
              tools.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Product
            </h3>

            <ul className="space-y-4">

              <li className="hover:text-white cursor-pointer">
                Features
              </li>

              <li className="hover:text-white cursor-pointer">
                Pricing
              </li>

              <li className="hover:text-white cursor-pointer">
                Templates
              </li>

              <li className="hover:text-white cursor-pointer">
                Integrations
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Resources
            </h3>

            <ul className="space-y-4">

              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>

            </ul>

            <div className="mt-8">

              <h3 className="text-white font-semibold mb-4">
                Social Links
              </h3>

              <div className="flex gap-3">

                <div className="w-10 h-10 rounded-full bg-white text-[#101727] flex items-center justify-center hover:bg-violet-600 hover:text-white cursor-pointer duration-300">
                  <FaYoutube />
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-[#101727] flex items-center justify-center hover:bg-violet-600 hover:text-white cursor-pointer duration-300">
                  <FaFacebookF />
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-[#101727] flex items-center justify-center hover:bg-violet-600 hover:text-white cursor-pointer duration-300">
                  <FaXTwitter />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0 text-sm text-gray-500">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;