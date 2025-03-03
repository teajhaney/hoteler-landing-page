import React from "react";
import { specialOffer } from "../constant/constants";
const SpecialofferSection = () => {
  return (
    <div className="bodyContent my-56 flex flex-col gap-3">
      <div className="flex justify-center">
        <h1 className="font-helvetica tracking-wide text-primary iconImage mx-2">
          {" "}
          WHAT WE OFFER{" "}
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-times text-secondary text-4xl font-extralight">
          Get Our Special Offer.
        </h1>
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
            <div className="absolute h-20 w-[272px] bottom-10 left-0 pl-10 flex items-center slide-hover-up">
              <h1 className="relative z-10 font-extralight font-times text-xl transition-colors duration-300 group-hover:text-white">
                {offer.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialofferSection;
