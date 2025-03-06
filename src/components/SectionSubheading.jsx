import React from 'react'

const SectionSubheading = ({title, className}) => {
  return (
    <h1
      className={`font-times text-secondary text-3xl font-extralight ${className}`}>
      {title}.
    </h1>
  );
}

export default SectionSubheading
