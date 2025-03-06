import React from "react";
import {
  HeroSection,
  ServiceSection,
  SpecialofferSection,
  CustomerServiceSection,
  Foodsection,
  VideoSection,
  ProjectSection,
  MemberSection,
  ContactSection,
  NewsSection,
  FooterSection,
} from "../sections/exportSections";
import {ScrollToTop, VisibleOnScrollNavbar} from'../components/exportComponent'
const Home = () => {
  return (
    <div className="relative max-w-screen overflow-hidden
      ">
      <VisibleOnScrollNavbar />
      <HeroSection />
      <SpecialofferSection />
      <ServiceSection />
      <CustomerServiceSection />
      <Foodsection />
      <VideoSection />
      <MemberSection />
      <ProjectSection />
      <ContactSection />
      <NewsSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Home;
