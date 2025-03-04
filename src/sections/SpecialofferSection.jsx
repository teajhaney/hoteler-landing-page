import React from "react";
import { specialOffer } from "../constant/constants";
import { SectionHeading , SectionSubheading} from "../components/exportComponent";
const SpecialofferSection = () => {
  return (
    <section className="bodyContent mt-56 flex flex-col gap-10">
      <div className="flex justify-center">
        <SectionHeading className={"text-center"} title={"WHAT WE OFFER"} />
      </div>
      <div className="flex justify-center">
        <SectionSubheading title={"Get Our Special Offer."} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {specialOffer.map((offer) => (
          <div key={offer.title} className="relative group">
            <div className="h-full w-full overflow-hidden">
              <img
                src={offer.image}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                alt={offer.title}
              />
            </div>
            {/* Text container with sliding background effect */}
            <div className="absolute h-20 w-[272px] bottom-10 left-0 pl-10 flex items-center bg-[#FEF3C7] hover:bg-primary transition-colors duration-500 ease-in-out">
              <h1 className=" relative z-10 font-extralight font-times text-xl transition-colors duration-300 group-hover:text-white">
                {offer.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialofferSection;
