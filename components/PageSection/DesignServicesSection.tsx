import React from "react";
import { DesignServices } from "../../database/design-services";

export default function DesignServicesSection() {
  return (
    <div className="bg-[#333] pt-[6.25rem] pb-[4.75rem]">
      <div className=" flex flex-col container mx-auto text-center text-[white]">
        <div className="relative">
          <h2 className="cooper-md  text-center text-[2.5rem] leading-[3rem] font-[400]">
            Sugar, spice and everything nice
          </h2>
          <p className=" inter-font text-[1.5rem] leading-[2.1875rem] mt-[0.75rem] font-[400]">
            You name it, we design it
          </p>
        </div>
        <div className=" overflow-auto md:overflow-hidden">
          <div className="flex flex-wrap w-[73rem] md:w-auto mt-[4.375rem]  inter-font justify-start md:justify-center text-[#333]">
            {DesignServices.map((service) => {
              return (
                <h2 className="px-[1.2rem]  xl:px-[1.41rem] text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]  xl:text-[1rem] mb-[1rem] xl:mb-[1.51rem]  mr-[1rem] border-y-[1px] border-r-[1px] border-l-[3px] border-[#282828] leading-[3rem] xl:leading-[3.5rem] rounded-[13px] deign-service-box-shadow font-[600] bg-[white]">
                  {service.title}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
