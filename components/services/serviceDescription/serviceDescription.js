import React from "react";
import BusinessDigitalization from "./digitalizeBuisness";
import EventManagement from "./eventManagement"
import BusinessAnalysisSoftwareSolutions from "./businessAnalysisSoftwareSolutions";
import HotlineServices from "./hotlineServices"
import PromotionalMarketing from "./PromotionalMarketing"
import DigitalMarketing from "./digitalMarketing";
import EmployeeRecruitment from "./Recruitment";


const Services = () => {
  return (
    <>
    <div className="bg-gray-100">
        <BusinessDigitalization />
        <EventManagement />
        <BusinessAnalysisSoftwareSolutions />
        <DigitalMarketing />
        <PromotionalMarketing />
        <EmployeeRecruitment />
        <HotlineServices  />

    </div>
    </>
  );
};

export default Services;
