const AboutUs = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-500 mb-4 relative">
              About Us
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
            </h1>
            <p className="text-xl text-gray-400 italic">
              Your Ultimate Sports Destination
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are passionate about bringing you the most comprehensive and
                engaging sports coverage. Our mission is to connect sports
                enthusiasts with the content they love, delivering real-time
                updates and in-depth analysis of your favorite sports.
              </p>
            </div>

            <div className="rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading digital platform for sports entertainment
                and information, creating a community where fans can engage,
                learn, and celebrate their passion for sports.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="rounded-xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-blue-500 text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Live Coverage</h3>
                <p className="text-gray-600">
                  Real-time updates from all major sporting events
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-blue-500 text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
                <p className="text-gray-600">
                  In-depth analysis from sports professionals
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-blue-500 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Connect with fellow sports enthusiasts
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-blue-100 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
