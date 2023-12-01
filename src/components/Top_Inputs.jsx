import React from "react";

const Top_Inputs = () => {
  return (
    <div className="flex gap-7 ">
      <form className="flex flex-col md:flex-row flex-wrap  w-full  bg-transparent   gap-2 md:gap-4 lg::gap-16 ">
        <label
          htmlFor="date"
          className="md:w-[30%] bg-white flex py-1 flex-col justify-center items-center px-3 rounded-lg w-full"
        >
          <span className="my-1 font-bold text-slate-400 text-sm  ">
            Auto Date Range
          </span>
          <input
            type="date"
            id="date"
            className="rounded-md px-3 py-1 w-full"
          />
        </label>
        <label
          htmlFor="services"
          className=" md:w-[30%] w-full bg-white flex py-1 flex-col justify-center items-center px-3 rounded-lg"
        >
          <span className="my-1 font-bold text-slate-400 text-sm  ">
            Services
          </span>
          <select
            name="services"
            id="services"
            className="rounded-md px-3 py-1 w-full bg-white"
          >
            <option value="">ALL</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
        </label>
        <label
          htmlFor="posts"
          className=" md:w-[30%] bg-white flex py-1 flex-col justify-center items-center px-3 rounded-lg w-full"
        >
          <span className="my-1 font-bold text-slate-400 text-sm  ">Posts</span>
          <select
            name="posts"
            id="posts"
            className="rounded-md px-3 py-1 bg-white w-full"
          >
            <option value="">ALL</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Top_Inputs;
