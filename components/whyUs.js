import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-gray-100 " id="services">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 ">
            Why Choose Us
          </h2>
          <p className="text-gray-500 sm:text-xl text-center ">
            We are committed to driving your business forward with tailored
            solutions, expert guidance, and a customer-focused approach. Here is
            why we stand out:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="bg-white p-4 rounded-xl hover:bg-gray-50">
    <p className="text-black flex items-center justify-between">
      Our team brings extensive industry experience and technical knowledge.
      <span className="text-primary"><FaLongArrowAltRight /></span>
    </p>
  </div>
  <div className="bg-white p-4 rounded-xl hover:bg-gray-50">
    <p className="text-black flex items-center justify-between">
      We provide modern and efficient solutions using cutting-edge technologies.
      <span className="text-primary"><FaLongArrowAltRight /></span>
    </p>
  </div>
  <div className="bg-white p-4 rounded-xl hover:bg-gray-50">
    <p className="text-black flex items-center justify-between">
      Dependable support and consistent results you can count on.
      <span className="text-primary"><FaLongArrowAltRight /></span>
    </p>
  </div>
  <div className="bg-white p-4 rounded-xl hover:bg-gray-50">
    <p className="text-black flex items-center justify-between">
      Your success is our priority, with personalized solutions for every need.
      <span className="text-primary"><FaLongArrowAltRight /></span>
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;
