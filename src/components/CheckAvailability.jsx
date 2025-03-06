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
    <div className="mx-2">
      <div className="absolute -bottom-[160px] lg:-bottom-[64px] left-1/2 right-1/2 -translate-x-1/2 w-[340px] md:w-[700px] lg:w-[1000px] 2xl:w-[1260px] bg-white grid grid-cols-3 lg:grid-cols-11 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.1)]">
        <div className=" h-24 lg:h-30 transform ease-out duration-1000 col-span-1 lg:col-span-3 flex items-center justify-center">
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
        <div className=" h-24 lg:h-30 transform ease-out duration-1000 col-span-1 lg:col-span-3 flex items-center justify-center">
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
        <div className=" h-24 lg:h-30 transform ease-out duration-1000 col-span-1 lg:col-span-3 flex items-center justify-center">
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
        <div className="slide-hover max-md:h-20 h-30  col-span-3 lg:col-span-2  bg-secondary text-xl text-center flex items-center justify-center hover:text-white">
          <h1 className="relative z-10 text-white  ">
            CHECK <br /> AVAILABILITY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
