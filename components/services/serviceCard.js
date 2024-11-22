import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (

      <div className="rounded-lg bg-white  shadow-sm p-5 flex flex-col  items-center w-xs h-60 transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center items-center mb-4 w-6 h-6 rounded-full bg-primary lg:h-12 lg:w-12 ">
          <div className="text-Primary">{icon}</div>
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-700  text-center">
          {title}
        </h3>
        <p className="text-gray-500  text-center text-md">
          {description}
        </p>
      </div>

  );
};

export default ServiceCard;
