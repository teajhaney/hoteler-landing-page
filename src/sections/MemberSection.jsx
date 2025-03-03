import React from "react";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/exportComponent";
import { members } from "../constant/constants";

const MemberSection = () => {
  return (
    <div className="py-24">
      <div className="bodyContent flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center">
          <SectionHeading title={"TEAM MEMBER"} />
          <SectionSubheading
            title={"Check Out Our Expert Hoteler Members"}
            className={"text-center"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member) => (
            <div
              key={member.name}
              className=" flex flex-col items-center gap-5">
              <div className="h-150 md:h-120 lg:h-72 w-full border border-primary flex justify-center items-center ">
                <div className="w-[95%] h-[95%] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full  transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-times text-2xl">{member.name}</h1>
                <h1 className="font-helvetica font-extralight text-gray-400">
                  {member.job}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
