import React from 'react'
import {SectionHeading, SectionSubheading} from '../components/exportComponent';
import { foods } from '../constant/constants';

const Foodsection = () => {
  return (
    <section className="py-20">
      <div className="bodyContent flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center">
          <SectionHeading title={"HOTELER BEST MENU"} />
          <SectionSubheading title={"Unique Specialty Foods"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10">
          {foods.map((food) => (
            <div key={food.name} className="w-full h-[100px] flex gap-5 justify-between">
              <div className="flex gap-2">
                <img src={food.image} alt={food.name} />
                <div className="flex flex-col justify-center gap-1">
                  <h1 className="font-times font-extralight text-xl">
                    {food.name}
                  </h1>
                  <p className="font-helvetica text-gray-400 font-extralight text-sm ">
                    {food.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center  items-end gap-1">
                <h1 className="font-times font-extralight text-xl">
                  {food.price}
                </h1>
                <button className="border border-primary font-helvetica text-primary font-extralight text-[10px] px-2 py-1">
                  {food.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Foodsection
