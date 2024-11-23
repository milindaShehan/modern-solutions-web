import React from "react";
import Image from 'next/image';

const PromotionalMarketing = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="promotional-marketing"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Promotional <span className="text-primary">Marketing</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              Our promotional marketing services are designed to increase brand visibility, generate excitement,
              and drive customer engagement through targeted campaigns and creative strategies. We offer both digital and
              traditional promotional services tailored to your business needs.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[ 
                "Brand Promotions: Develop creative strategies to promote your brand to a larger audience.",
                "Giveaways & Contests: Engage customers with interactive campaigns like giveaways or contests.",
                "Influencer Marketing: Leverage influencers to increase brand awareness and reach.",
                "Event Marketing: Create and promote live or virtual events to engage with your audience.",
                "Limited-Time Offers: Design promotional offers that create urgency and drive sales.",
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
                src="/promotional-marketing-1.png" // Path to your new image
                alt="promotional marketing"
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

export default PromotionalMarketing;
