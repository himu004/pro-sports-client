import { Fade } from "react-awesome-reveal";

const ASection = () => {
  return (
    <Fade cascade damping={0.3}>
      <div className="min-h-screen">
        <div className="hero min-h-screen flex items-center justify-center px-4">
          <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
            <div className="text-center lg:text-left max-w-lg">
              <span className="px-4 py-2  text-blue-600 rounded-full text-sm font-medium mb-4 inline-block">
                Premium Collection
              </span>
              <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
                Premium Sports Gear!
              </h1>
              <p className="py-6 text-lg text-gray-600">
                Discover our collection of high-performance equipment, designed
                for athletes who demand excellence.
              </p>
              <button className="btn btn-neutral text-white rounded-lg transition-all duration-200">
                Shop Now
              </button>
            </div>
            <div className="card w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden border border-gray-100">
              <div className="card-body p-8">
                <h2 className="card-title text-2xl font-bold text-gray-900">
                  New Arrivals
                </h2>
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium inline-block">
                  Hot Deals
                </span>
                <p className="mt-4 text-gray-600">
                  Check out our latest sports equipment and accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ASection;
