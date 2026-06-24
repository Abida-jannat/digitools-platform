

const StatsBanner = () => {
    return (
        <div className=" bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex-1 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">50K+</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium mt-2">Active Users</p>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block h-12 w-[1px] bg-white/30" />

          {/* Stat 2 */}
          <div className="flex-1 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">200+</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium mt-2">Premium Tools</p>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block h-12 w-[1px] bg-white/30" />

          {/* Stat 3 */}
          <div className="flex-1 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">4.9</h2>
            <p className="text-purple-100 text-sm md:text-base font-medium mt-2">Rating</p>
          </div>

        </div>
      </div>
    </div>
    );
};

export default StatsBanner;