import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-white sm:p-6 border border-gray-100">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div>
            <div className="mb-6 md:mb-0">
              <a href="https://modernsolutions.lk" className="flex items-center">
                <img
                  src="/LOGOModern.png" // Replace with Modern Equipment Solutions logo
                  className="mr-3 h-20"
                  alt="Modern Equipment Solutions Logo"
                />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Modern<span className="text-primary"> Equipment Solutions</span>
                </span> */}
              </a>
            </div>
            <div className="max-w-lg mt-6 text-black">
              Modern Equipment Solutions offers business digitalization, event management, software solutions, and digital marketing services.
            </div>
            <div className="mt-6">
              {/* Additional content can go here */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Services
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/business-digitalization" className="hover:text-primary">
                    Business Digitalization
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/event-management" className="hover:text-primary">
                    Event Management
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/software-solutions" className="hover:text-primary">
                    Business Analysis & Software Solutions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/digital-marketing" className="hover:text-primary">
                    Digital Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/promotional-marketing" className="hover:text-primary">
                    Promotional Marketing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/hotline-services" className="hover:text-primary">
                    Hotline Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/recruitment-services" className="hover:text-primary">
                    3rd Party Employee Recruitment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-600">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:text-primary">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {year}{" "}
            <a href="https://msiclabs.com" className="hover:underline hover:text-primary font-bold">
              Modern Equipment Solutions™
            </a>
            . All Rights Reserved.
          </span>
          {/* <span className="">
            Powered by{" "}
            <a href="https://msiclabs.com" className="hover:underline text-[#702cb4] font-bold">
              MSIC Labs
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
