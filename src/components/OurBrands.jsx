import Marquee from "react-fast-marquee";
import { CgAdidas } from "react-icons/cg";
import {
  SiBata,
  SiJordan,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiReebok,
  SiThenorthface,
  SiUnderarmour,
} from "react-icons/si";

const OurBrands = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Our Top Brands
        </h2>
        <p className="text-xl text-gray-600">
          Partnering with the {`world's`}leading sports brands
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 w-40 h-full"></div>
        <div className="absolute right-0 w-40 h-full"></div>
        <Marquee direction="right" speed={40} gradient={false} className="py-8">
          <div className="flex items-center justify-center mx-12">
            <CgAdidas className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center mx-12">
            <SiNike className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center mx-12 ">
            <SiJordan className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center mx-12">
            <SiPuma className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center mx-12">
            <SiBata className="text-8xl" />
          </div>

          <div className="flex items-center justify-center mx-12">
            <SiReebok className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiUnderarmour className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiNewbalance className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>
          <div className="flex items-center justify-center mx-12">
            <SiThenorthface className="text-7xl hover:text-red-500 transition-all duration-300" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurBrands;
