import { use } from 'react';
import designTool from "../../../assets/products/design-tool.png";
import operationIcon from "../../../assets/products/operation.png"
import portfolioIcon from "../../../assets/products/portfolio.png"
import shoppingCart from "../../../assets/products/shopping-cart.png"
import socialMedia from "../../../assets/products/social-media.png"
import writingIcon from "../../../assets/products/writing_2327400 1.png"

const Products = ({productPromise}) => {
    const data = use(productPromise);
    const iconMap = {
    FileText: writingIcon,
     Award: designTool,
     Globe: portfolioIcon,
    TrendingUp: operationIcon,
     MessageSquare: socialMedia,
     ClipboardList: shoppingCart,
     Briefcase: operationIcon,
    
 };

    return (
       
  <div className="max-w-6xl mx-auto px-25 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
        >
          {/* Icon + Tag */}
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img
                src={iconMap[product.icon]}
                alt={product.name}
                className="w-5 h-5 object-contain"
              />
            </div>

            <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
              {product.tag}
            </span>
          </div>

          {/* Name */}
          <h2 className="text-lg font-bold mt-4">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-3">
            <span className="text-2xl font-bold">
              ${product.price}
            </span>
            <span className="text-gray-400 text-sm">
              /{product.period}
            </span>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-1">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="w-full mt-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  </div>
);
  
};

export default Products;
