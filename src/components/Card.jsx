import React from "react";

import { IoIosArrowRoundUp } from "react-icons/io";
const Card = () => {
  const carddata = [
    {
      title: "Total Accounts",
      value: "2,014",
      percent: (
        <>
          <IoIosArrowRoundUp className="inline text-xl font-bold" /> {"20%"}
        </>
      ),
      previous: "vs previous 30days",
    },
    {
      title: "Total Accounts",
      value: "2,014",
      percent: (
        <>
          <IoIosArrowRoundUp className="inline text-xl font-bold" /> {"20%"}
        </>
      ),
      previous: "vs previous 30days",
    },
    {
      title: "Total Accounts",
      value: "2,014",
      percent: (
        <>
          <IoIosArrowRoundUp className="inline text-xl font-bold" /> {"20%"}
        </>
      ),
      previous: "vs previous 30days",
    },
    {
      title: "Total Accounts",
      value: "2,014",
      percent: (
        <>
          <IoIosArrowRoundUp className="inline text-xl font-bold" /> {"20%"}
        </>
      ),
      previous: "vs previous 30days",
    },
  ];
  return carddata.map(data => {
    const { title, value, percent, previous } = data;
    return (
      <div className="flex flex-col gap-2 md:gap-4 justify-between border-2 p-3 pb-8 rounded-lg lg:w-[20%] md:w-[22%] w-[45%] bg-white h-48">
        <h3 className="text-sm font-semibold text-slate-400">{title}</h3>
        <div className="flex flex-col justify-center items-center">
          <strong className="text-4xl ">{value}</strong>
          <p className="text-emerald-400 font-semibold">{percent}</p>
        </div>
        <p className="text-slate-400 text-xs text-center">{previous}</p>
      </div>
    );
  });
};

export default Card;

// [{ title,value,percent,previous},{ title,value,percent,previous}] -> single card data
