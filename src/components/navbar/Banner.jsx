import bannerPic from "../../assets/banner.png"
const Banner = () => {
    return (
     <section className="w-full bg-white py-10 md:py-16">
   
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:max-w-[640px] flex flex-col items-start gap-5">
            
           
            <div className="inline-flex items-center gap-1.5 bg-[#EEF2F6] text-violet-600 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
              New: AI-Powered Tools Available
            </div>
            
           
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827]  ">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            
            
            <p className="text-[#4B5563] text-base text-xs sm:text-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>
            
           
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button className="bg-gradient-to-r from-[#9514FA] to-[#4F39F6]  text-white font-medium px-3 py-1 rounded-full  text-sm md:text-base shadow-sm">
                Explore Products
              </button>
              <button className="border border-violet-600 text-violet-600 font-medium px-3 py-1 rounded-full transition-all text-sm md:text-base">
            
                Watch Demo
              </button>
            </div>

          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <img src={bannerPic} alt="" className="w-full max-w-[320px] md:max-w-[360px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;