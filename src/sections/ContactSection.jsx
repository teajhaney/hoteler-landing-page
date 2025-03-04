import React from "react";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/exportComponent";

const ContactSection = () => {
  return (
    <section className="bodyContent py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:order-2 lg:flex-2 shadow-[10px_10px_100px_20px_rgba(0,0,0,0.1)] p-10 flex flex-col gap-5">
          <SectionHeading title={"CONTACT US"} />
          <SectionSubheading title={"Get in touch"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 ">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              className="bg-gray-100 py-1 px-4 h-14 focus:outline-secondary focus:border-secondary"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="bg-gray-100 py-1 px-4 h-14 focus:outline-secondary focus:border-secondary"
            />
            <input
              type="text"
              name="checkIn"
              id="CheckIn"
              placeholder="Check In"
              className="bg-gray-100 py-1 px-4 h-14 focus:outline-secondary focus:border-secondary"
            />
            <input
              type="text"
              name="checkOut"
              id="CheckOut"
              placeholder="Check Out"
              className="bg-gray-100 py-1 px-4 h-14 focus:outline-secondary focus:border-secondary"
            />
          </div>
          <textarea
            className="h-32 bg-gray-100 focus:outline-secondary focus:border-secondary"
            name="message"
            id="message"
            placeholder="Write a Message"
            alt="write your message"></textarea>
          <div className=" bg-secondary h-16 flex justify-center items-center text-white hover:bg-primary transition-colors duration-500 ease-in-out">
            <h1 className="z-100 font-helvetica font-extralight text-xl  ">
              CHECK AVAILABILITY
            </h1>
          </div>
        </div>
        <div className="flex   w-full   lg:justify-end lg:items-center">
          <div className="bg-[#2A2A2A] h-72 w-full lg:w-80 flex justify-center items-center">
            <div className="border border-primary h-[95%] w-[95%] p-14 flex flex-col justify-between">
              <img
                src="https://html.kodesolution.com/2025/hoteler-html/images/icons/icon-call-1.png"
                alt="call icon"
                className="h-16 w-16"
              />
              <h1 className="font-helvetica font-extralight text-white text-xl">
                Call us for any inquiry
              </h1>
              <h1 className="font-times font-extralight text-white text-2xl">
                (801) 500 50 008
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
