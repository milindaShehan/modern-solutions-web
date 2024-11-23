import React from "react";
import Image from 'next/image';

const BusinessDigitalization = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="business-digitalization"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Business {" "}
              <span className="text-primary">Digitalization</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              We specialize in transitioning your business to digital platforms, enhancing operational efficiency
              and streamlining processes for better productivity. Our solutions ensure your business stays competitive,
              scalable, and responsive to market demands.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[
                "Digital Transformation: Seamlessly integrate modern digital tools to enhance business operations.",
                "Automation of Processes: Reduce manual workloads and optimize efficiency through automation.",
                "Improved Collaboration: Foster better communication and collaboration across teams with digital tools.",
                "Data-Driven Decisions: Leverage analytics and insights to make informed decisions for business growth.",
                "Scalable Solutions: Adopt flexible and scalable digital systems that grow with your business needs.",
              ].map((text, index) => (
                <li key={index} className="flex space-x-3">
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
                    <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-4 ">
            <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
            <Image
          src="/business-digitalization-1.png"
          alt="business digitalization"
          width={480} 
          height={480} 
          className="object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
        />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDigitalization;
