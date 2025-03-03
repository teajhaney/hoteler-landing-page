import React from 'react'

const SectionHeading = ({ title, className }) => {
  return (
    <h1 className={`iconImage text-primary tracking-wide font-helvetica font-extralight ${className}`}>
      {" "}
      {title}{" "}
    </h1>
  );
}

export default SectionHeading
