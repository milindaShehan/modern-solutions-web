import React from "react";
import Image from 'next/image';

const DigitalMarketing = () => {
  return (
    <div className="bg-white">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="digital-marketing"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="w-full px-4 ">
            <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <Image
                src="/digital-marketing-1.png" // Path to your new image
                alt="digital marketing"
                width={480} 
                height={480} 
                className="object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Digital <span className="text-primary">Marketing</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              Our digital marketing services help businesses reach their target audience with precision and engage
              effectively across multiple platforms. We offer data-driven marketing strategies to drive traffic, generate leads,
              and enhance brand visibility.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[ 
                "Search Engine Optimization (SEO): Improve your website's visibility on search engines.",
                "Social Media Marketing: Build and engage a community through targeted social media campaigns.",
                "Pay-Per-Click (PPC): Optimize paid advertising strategies to maximize ROI.",
                "Email Marketing: Create personalized campaigns that connect and convert.",
                "Content Marketing: Develop high-quality content to educate and engage your audience.",
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
          
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
