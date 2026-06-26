import { use, useState } from 'react';
import { toast } from 'react-toastify';
import designTool from "../../../assets/products/design-tool.png";
import operationIcon from "../../../assets/products/operation.png";
import portfolioIcon from "../../../assets/products/portfolio.png";
import shoppingCart from "../../../assets/products/shopping-cart.png";
import socialMedia from "../../../assets/products/social-media.png";
import writingIcon from "../../../assets/products/writing_2327400 1.png";

const Products = ({ productPromise, cart, setCart }) => {

  const data = use(productPromise);
  const [activeTab, setActiveTab] = useState("products");

  const iconMap = {
    FileText: writingIcon,
    Award: designTool,
    Globe: portfolioIcon,
    TrendingUp: operationIcon,
    MessageSquare: socialMedia,
    ClipboardList: shoppingCart,
    Briefcase: operationIcon,
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleAddToCart = (product) => {

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast.warning("⚠️ Product already added!");
      return;
    }

    setCart([...cart, product]);

    toast.success("🛒 Product added to cart!");
  };

  const handleRemove = (id) => {

    const remainingItems = cart.filter(item => item.id !== id);

    setCart(remainingItems);

    toast.info("❌ Product removed from cart!");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setCart([]);
    toast.success("Checkout completed successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto px-25 py-10">

      {/* Header */}
      <div className="text-center items-center">
        <h1 className="text-4xl font-bold">
          Premium Digital Tools
        </h1>

        <p className="text-xs mx-auto px-2 py-3 text-gray-600">
          Choose from our curated collection of premium digital products designed
          <br />
          to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-4">

          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "products"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "border border-gray-300 text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "border border-gray-300 text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

      {/* Products Section */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

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
              <button
                onClick={() => handleAddToCart(product)}
                className={`w-full mt-5 py-2.5 rounded-full text-white text-sm font-medium ${
                  cart.some(item => item.id === product.id)
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-purple-600 to-pink-500"
                }`}
              >
                {cart.some(item => item.id === product.id)
                  ? "Added to Cart ✓"
                  : "Buy Now"}
              </button>

            </div>

          ))}

        </div>
      )}
          {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="mt-8 max-w-4xl mx-auto border border-gray-200 rounded-2xl p-6 bg-white">

          <h2 className="text-2xl font-bold mb-6">
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-lg font-semibold text-gray-500">
                Your cart is empty
              </h2>
            </div>

          ) : (

            <>
              {/* Cart Items */}
              <div className="space-y-4">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <img
                          src={iconMap[item.icon]}
                          alt={item.name}
                          className="w-5 h-5 object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          ${item.price}
                        </p>
                      </div>

                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-pink-500 text-sm font-medium hover:text-pink-700"
                    >
                      Remove
                    </button>

                  </div>

                ))}

              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-500">
                  Total:
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full mt-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium"
              >
                Proceed To Checkout
              </button>

            </>

          )}

        </div>
      )}

    </div>
  );
};

export default Products;