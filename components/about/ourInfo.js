import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import VisionMission from "./v&m";

const Scooter = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5"
        id="scooter"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          {/* Who We Are Section */}
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Who We Are
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              At Modern Equipment and Solutions Pvt Ltd, we are committed to
              empowering individuals and businesses to experience freedom and
              efficiency through innovative solutions. Whether it is modern
              equipment or tailored digital services, we ensure every client
              receives the best tools to unlock their potential and achieve
              their goals.
            </p>
            <p className="mb-8 font-light lg:text-lg">
              Our passion for innovation and our dedication to client
              satisfaction set us apart. We focus on blending technology,
              expertise, and creativity to deliver seamless and impactful
              solutions.
            </p>
            <div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                    10+ Years
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Empowering businesses with innovative solutions and digital transformations.
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200  transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                    300+ Clients
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Trusted by organizations worldwide to deliver exceptional results and value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Gallery */}
          <div className="w-full px-4">
            <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src="/modern-solutions-1.jpg"
                    alt="scooter image"
                    className="h-full w-full object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4 sm-mb-4">
                <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px] rounded-2xl overflow-hidden">
                  <img
                    src="/modern-solutions-2.jpg"
                    alt="scooter image"
                    className="h-full w-full object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="mb-4 sm:mb-8 sm:h-[100px] md:h-[163px] lg:mb-4 lg:h-[160px] xl:mb-8 xl:h-[157px] rounded-2xl overflow-hidden">
                  <img
                    src="/modern-solutions-3.jpg"
                    alt="scooter image"
                    className="h-full w-full object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      <div className="bg-white">
            <VisionMission />
            </div>
    </div>
  );
};

export default Scooter;
