import { Button } from "../layouts/Button";
import { ServiceCard } from "../layouts/ServiceCard";

import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

export const Service = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgrounColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgrounColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgrounColor" />;
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
            pariatur.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="see services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServiceCard icon={icon1} text="Lap Test" />
        <ServiceCard icon={icon2} text="Health Check" />
        <ServiceCard icon={icon3} text="Health Health" />
      </div>
    </div>
  );
};
