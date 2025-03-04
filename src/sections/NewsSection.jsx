import React from "react";
import {  news } from "../constant/constants";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/exportComponent";
import { CiFaceFrown } from "react-icons/ci";
import { FaBed, FaBath, FaWifi } from "react-icons/fa6";
const NewsSection = () => {
  return (
    <div className="bodyContent py-24 flex flex-col gap-5">
      <div className="flex flex-col gap-5 items-center">
        <SectionHeading title={"NEWS & BLOG"} />
        <SectionSubheading
          title={"Check Latest Blog Post from Blog List"}
          className={"text-center"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map((newsItem) => (
          <div key={newsItem.title} className="bg-white flex flex-col gap-5">
            <div className="w-full overflow-hidden">
              <img
                src={newsItem.Image}
                alt={newsItem.title}
                className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <h1 className="text-primary font-helvetica font-extralight">{`——— ${newsItem.location} • ${newsItem.date}`}</h1>
            <h1 className="text-secondary font-times text-3xl font-extralight">
              {newsItem.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
