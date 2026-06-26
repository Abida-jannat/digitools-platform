import userIcon from "../../../assets/user.png";
import packageIcon from "../../../assets/package.png";
import rocketIcon from "../../../assets/rocket.png";
const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

const Steps = () => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h2>

          <p className="text-gray-500 mt-3">
            Start using premium digital tools in minutes, not hours.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {steps.map((step) => (

            <div
              key={step.id}
              className="relative bg-white border border-gray-200 rounded-2xl p-10 text-center hover:shadow-lg duration-300"
            >

              {/* Number Badge */}

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                {step.id}
              </div>

              {/* Icon */}

              <div className="w-20 h-20 mx-auto rounded-full bg-violet-100 flex items-center justify-center">

                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10"
                />

              </div>

              {/* Title */}

              <h3 className="text-3xl font-bold mt-7">
                {step.title}
              </h3>

              {/* Description */}

              <p className="text-gray-500 mt-4 text-base leading-6">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Steps;