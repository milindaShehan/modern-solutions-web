import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5"
        id="aboutus"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="w-full px-4">
          <img
                    src="/modern-solutions-img.svg"
                    alt="about image"
                    className="h-full w-full object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
          </div>
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              About Us
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              We specialize in helping businesses transition to digital platforms and enhance operational efficiency through tailored software solutions. Our team focuses on delivering cutting-edge technologies that drive growth and streamline processes for our clients.
            </p>
            <p className="mb-8 font-light lg:text-lg">
              Our values are the foundation of everything we do. We are committed to:
            </p>
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base leading-tight text-gray-900">
                  <strong>Innovation:</strong> Always staying ahead of the curve with the latest technologies.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base leading-tight text-gray-900">
                  <strong>Reliability:</strong> Providing dependable services and support for your business needs.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base leading-tight text-gray-900">
                  <strong>Customer Success:</strong> Ensuring our clients’ growth through personalized solutions.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
