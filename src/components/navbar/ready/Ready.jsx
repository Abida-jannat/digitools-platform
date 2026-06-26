const Ready = () => {
  return (
    <section className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-violet-100 mt-5">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

          <button className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition">
            View Pricing
          </button>

        </div>

        <p className="text-violet-200 text-sm mt-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </section>
  );
};

export default Ready;