import React from "react";
import Image from 'next/image';

const EventManagement = () => {
  return (
    <div className="bg-white">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="event-management"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="w-full px-4 ">
            <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <Image
                src="/event-management-1.jpg" // Path to your new image
                alt="event management"
                width={480} 
                height={480} 
                className="object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Event <span className="text-primary">Management</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              We specialize in creating seamless event experiences that reduce risks, optimize space, and maximize
              efficiency. Our event management service ensures everything from planning to execution is handled 
              meticulously to create a successful event for all involved.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[ 
                "Risk Management: Identify and mitigate potential risks to ensure a smooth event.",
                "Space Optimization: Manage event spaces effectively, ensuring comfort and functionality.",
                "Team Coordination: Manage the event's workforce to ensure smooth operations and timely execution.",
                "Vendor Management: Handle event suppliers, ensuring timely deliveries and service quality.",
                "Attendee Experience: Ensure all participants have an enjoyable, stress-free experience.",
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

export default EventManagement;
