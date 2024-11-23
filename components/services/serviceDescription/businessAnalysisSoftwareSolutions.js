import React from "react";
import Image from 'next/image';

const BusinessAnalysisSoftwareSolutions = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="business-analysis-software-solutions"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Business Analysis & <span className="text-primary">Software Solutions</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              We specialize in evaluating your business challenges and providing tailored digital and software
              solutions to optimize your operations. Whether it's automating processes, improving user experience,
              or integrating new technologies, we help your business stay ahead of the curve.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[ 
                "In-Depth Business Analysis: Understand your unique business needs and challenges.",
                "Custom Software Solutions: Design and implement software that streamlines operations and boosts productivity.",
                "System Integration: Seamlessly integrate new systems with your existing infrastructure.",
                "Process Automation: Reduce manual work through automation, leading to higher efficiency.",
                "Continuous Improvement: Provide ongoing support to ensure your business software evolves with your needs.",
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
                src="/business-analysis-software-solutions-1.png" // Path to your new image
                alt="business analysis & software solutions"
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

export default BusinessAnalysisSoftwareSolutions;
