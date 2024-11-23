import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";


const VisionMission = () => {
  const vision = "To redefine the business landscape by seamlessly integrating advanced digital tools, cutting-edge technologies, and innovative strategies. Our vision is to empower businesses to achieve their fullest potential, driving growth, sustainability, and efficiency while fostering meaningful relationships and delivering unparalleled value to our clients and communities.";
  const mission = "Our mission is to provide tailored digitalization, marketing, and business solutions that enable enterprises to thrive in a rapidly evolving world. Through a commitment to excellence, innovation, and customer-centricity, we aim to bridge the gap between traditional practices and modern technology. By delivering exceptional services, fostering trust, and embracing continuous improvement, we aspire to be the preferred partner for businesses seeking transformation and growth.";

  return (
   
      <div className="grid gap-8  mx-auto max-w-screen-xl lg:grid-cols-2 ">
        <div className="flex flex-col justify-top items-left space-y-4 lg:space-y-6 bg-white  p-8 m-5 rounded-xl">
          <FaEye className="text-4xl text-gray-900 " />
          <h2 className="text-2xl font-bold text-gray-900 ">
            Our Vision
          </h2>
          <p className="text-lg text-gray-500  text-left">
            {vision}
          </p>
        </div>
        <div className="flex flex-col justify-top items-left space-y-4 lg:space-y-6 bg-white  p-8 m-5 rounded-xl">
          <GoGoal className="w-10 h-10 text-gray-900 " />
          <h2 className="text-2xl font-bold text-gray-900 ">
            Our Mission
          </h2>
          <p className="text-lg text-gray-500  text-left">
            {mission}
          </p>
        </div>
      </div>

  );
};

export default VisionMission;
