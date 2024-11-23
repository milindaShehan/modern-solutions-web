import React from "react";
import Image from 'next/image';

const EmployeeRecruitment = () => {
  return (
    <div className="bg-white">
      <section
        className="py-16 mt-14 sm:mt-16 lg:mt-0 mb-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 "
        id="employee-recruitment"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="w-full px-4 ">
            <div className="flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <Image
                src="/employee-recruitment-1.png" // Path to your new image
                alt="employee recruitment"
                width={480} 
                height={480} 
                className="object-cover object-center rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              3rd Party Employee <span className="text-primary">Recruitment</span>
            </h2>
            <p className="mb-8 font-light lg:text-lg">
              We provide tailored recruitment solutions to help businesses find the best candidates for their needs.
              Our 3rd party recruitment services ensure that only the most qualified individuals are matched with your
              organization's requirements, streamlining the hiring process and ensuring quality hires.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7"
            >
              {[ 
                "Talent Sourcing: We utilize multiple channels to identify top talent for your organization.",
                "Screening & Interviewing: We conduct initial screening and interviews to ensure the best fit.",
                "Candidate Matching: We match candidates based on skills, experience, and culture fit.",
                "End-to-End Recruitment: From job postings to final placement, we handle the entire recruitment process.",
                "Flexible Recruitment Solutions: We offer permanent, temporary, or contract-based recruitment services."
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

export default EmployeeRecruitment;
