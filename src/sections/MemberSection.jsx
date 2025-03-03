import React from "react";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/exportComponent";
const MemberSection = () => {
  return (
    <div className="py-24">
      <div className="bodyContent flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center">
          <SectionHeading title={"TEAM MEMBER"} />
          <SectionSubheading title={"Check Out Our Expert Hoteler Members"} className={'text-center'} />
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
