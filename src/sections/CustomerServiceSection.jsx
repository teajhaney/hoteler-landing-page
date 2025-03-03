import React from "react";
import { useState } from "react";
import { customerServices, quotes } from "../constant/constants";
import { CiFaceFrown } from "react-icons/ci";
import { FaBed, FaBath, FaWifi } from "react-icons/fa6";

const CustomerServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next quote
  const nextQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous quote
  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="bg-[#FEF3C7] py-24">
      <div className="bodyContent flex flex-col gap-5">
        <h1 className="iconImage text-primary font-helvetica font-extralight text-center">
          {" "}
          CUSTOMER SERVICES{" "}
        </h1>
        <h1 className=" text-secondary text-[40px] font-times font-extralight text-center">
          {" "}
          Book your stay and relax in luxury{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {customerServices.map((customerService) => (
            <div
              key={customerService.title}
              className="bg-white flex flex-col gap-5">
              <div className="w-full overflow-hidden">
                <img
                  src={customerService.image}
                  alt={customerService.title}
                  className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              {/* spacing between image and the rest */}
              <div className="mx-3 mb-5 flex flex-col gap-5">
                <h1 className="font-times font-extralight text-xl">
                  {customerService.title}
                </h1>
                <h1 className="font-helvetica text-primary font-extralight text-md">
                  {customerService.price}
                </h1>
                <hr className="border-gray-300 border-0.1" />
                {/* after horizontal line , flex- to space between them*/}
                <div className="flex justify-between">
                  {/* flex for each sides and flex for each line with icon */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-5 font-extralight text-gray-400 text-lg">
                      <CiFaceFrown />
                      <h1 className="">{customerService.person}</h1>
                    </div>
                    <div className="flex items-center gap-5 font-extralight text-gray-400 text-lg">
                      <FaBed />
                      <h1 className="">{customerService.bedSize}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-5 font-extralight text-gray-400 text-lg">
                      <FaBath />
                      <h1 className="">{customerService.bathtub}</h1>
                    </div>
                    <div className="flex items-center gap-5 font-extralight text-gray-400 text-lg">
                      <FaWifi />
                      <h1 className="">{customerService.wifi}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* quote section */}
        <div className="relative flex flex-col gap-3 items-center mt-20 justify-center w-full ">
          <img
            src="https://html.kodesolution.com/2025/hoteler-html/images/icons/testi-shape1.png"
            alt="quoteation icon"
          />
          {/* Quote Section */}
          <div className="text-center max-w-3xl ">
            <p className="text-lg lg:text-2xl text-gray-400 font-extralight font-helvetica transition-opacity duration-500 ease-in-out">
              {quotes[currentIndex].quotes}
            </p>
            <h3 className="mt-4 text-xl font-times">
              {quotes[currentIndex].name}
            </h3>
            <p className="text-gray-400 text-xl font-helvtica">
              {quotes[currentIndex].occupation}
            </p>
          </div>
          {/* Images Section */}
          <div className="relative h-24 mt-10 flex items-center justify-center space-x-4 ">
            {quotes.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.name}
                className={`w-16 h-16 rounded-full border-1 border-white object-cover cursor-pointer transition-all duration-500 ease-in-out 
              ${index === currentIndex ? "w-24 h-24 scale-110" : "opacity-50"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Arrows for navigation */}
          <button
            onClick={prevQuote}
            className="absolute left-0 top-1/2 bottom 1/2 text-2xl lg:text-4xl cursor-pointer">
            ←
          </button>
          <button
            onClick={nextQuote}
            className="absolute right-0 text-2xl lg:text-4xl cursor-pointer">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceSection;
