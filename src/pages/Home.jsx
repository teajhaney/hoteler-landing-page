import React from "react";
import {
  HeroSection,
  ServiceSection,
  SpecialofferSection,
  CustomerServiceSection,
  Foodsection,
  VideoSection, MemberSection,
} from "../sections/exportSections";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SpecialofferSection />
      <ServiceSection />
      <CustomerServiceSection />
      <Foodsection />
      <VideoSection />
      <MemberSection />
    </>
  );
};

export default Home;
