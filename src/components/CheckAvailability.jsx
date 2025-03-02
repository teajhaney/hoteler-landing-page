import React from "react";
import { useRef, useState } from "react";

const CheckAvailability = () => {
  const dateInputReIn = useRef(null);
  const dateInputRefOut = useRef(null);
  const [selectedDateIn, setSelectedDateIN] = useState("2025-12-31");
  const [selectedDateOut, setSelectedDateOut] = useState("2025-12-31");
  const [selectQuests, setSelectQuests] = useState(1);

  const handleOpenDatePickerIn = () => {
    if (dateInputReIn.current) {
      dateInputReIn.current.showPicker(); // Opens the date picker
    }
  };
  const handleOpenDatePickerOut = () => {
    if (dateInputRefOut.current) {
      dateInputRefOut.current.showPicker(); // Opens the date picker
    }
  };
  return (
    <div className="absolute -bottom-[80px] md:-bottom-[64px] left-1/2 right-1/2 -translate-x-1/2  w-[400px] sm:w-[600px] md:w-[700px] lg:w-[1000px] 2xl:w-[1200] bg-white grid grid-cols-3 md:grid-cols-11 shadow-lg">
      <div className="max-md:h-32 h-36 col-span-1 md:col-span-3 flex items-center justify-center">
        <div className="flex flex-col justify-center  gap-2 lg:ml-10">
          <h1 className="text-xl lg:text-2xl font-times font-extralight text-secondary">
            Check-in
          </h1>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleOpenDatePickerIn}>
            <input
              ref={dateInputReIn}
              value={selectedDateIn}
              onChange={(e) => setSelectedDateIN(e.target.value)}
              className="text-primary text-sm  font-extralight w-20 cursor-pointer"
              type="date"
              is="date-picker"
              placeholder="31 Dec 2025"
            />
            <p className="text-secondary rotate-180 font-bold">&#8896;</p>
          </div>
        </div>
      </div>
      <div className="max-md:h-32 h-36 col-span-1 md:col-span-3 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center  gap-2 lg:ml-10">
          <h1 className="text-xl lg:text-2xl font-times font-extralight text-secondary">
            Check-out
          </h1>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleOpenDatePickerOut}>
            <input
              ref={dateInputRefOut}
              value={selectedDateOut}
              onChange={(e) => setSelectedDateOut(e.target.value)}
              className="text-primary text-sm  font-extralight w-20 cursor-pointer"
              type="date"
              is="date-picker"
              placeholder="31 Dec 2025"
            />
            <p className="text-secondary rotate-180 font-bold">&#8896;</p>
          </div>
        </div>
      </div>
      <div className="max-md:h-32 h-36 col-span-1 md:col-span-3 flex items-center justify-center">
        <div className="flex flex-col justify-center  gap-2 lg:ml-10">
          <h1 className="text-xl lg:text-2xl font-times font-extralight text-secondary">
            Quests
          </h1>
          <div className="flex items-center ">
            <select
              value={selectQuests}
              onChange={(e) => setSelectQuests(e.target.value)}
              className=" text-sm  font-extralight w-10 cursor-pointer text-secondary">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-md:h-20 h-36 col-span-3 md:col-span-2  bg-secondary text-xl text-center flex items-center justify-center hover:bg-primary hover:transition-colors">
        <h1>
          CHECK <br /> AVAILABILITY
        </h1>
      </div>
    </div>
  );
};

export default CheckAvailability;
