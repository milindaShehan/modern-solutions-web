import React from "react";
import ServiceCard from "@/components/services/serviceCard";
import {
  FaLaptopCode,
  FaCalendarAlt,
  FaChartLine,
  FaBullhorn,
  FaTag,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";

// Example service data
const serviceData = [
  {
    title: "Business Digitalization",
    description:
      "Transform your business processes with cutting-edge technology and digital tools.",
    icon: <FaLaptopCode size={16} />, // React Icon for laptop code
  },
  {
    title: "Event Management",
    description:
      "Efficiently manage your events, reduce risks, and increase business productivity.",
    icon: <FaCalendarAlt size={16} />, // React Icon for calendar
  },
  {
    title: "Business Analysis",
    description:
      "Evaluate your business situation and implement tailored digital solutions to enhance growth.",
    icon: <FaChartLine size={16} />, // React Icon for chart line
  },
  {
    title: "Digital Marketing",
    description:
      "Drive visibility and engagement with targeted digital marketing campaigns.",
    icon: <FaBullhorn size={16} />, // React Icon for bullhorn
  },
  {
    title: "Promotional Marketing",
    description:
      "Boost your brand awareness with innovative promotional marketing strategies.",
    icon: <FaTag size={16} />, // React Icon for tag
  },
  {
    title: "Hotline Services",
    description:
      "Provide 24/7 customer service with efficient hotline support.",
    icon: <FaHeadset size={16} />, // React Icon for headset
  },
  {
    title: "Employee Recruitment",
    description:
      "We help you find the best candidates through expert recruitment and filtering.",
    icon: <FaUsers size={16} />, // React Icon for users
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 " id="services">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 ">
            Our Services
          </h2>
          <p className="text-gray-500 sm:text-xl text-center ">
            We offer premier solutions to support your growth in the digital
            realm.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {serviceData.map((service, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={index}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
