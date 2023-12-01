import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChartGen from "./ChartGen";

const ChartWrap = () => {
  const state = useSelector(state => state.admindata.chartdata);

  console.log(state);
  return state.map(data => {
    return (
      <ChartGen
        type={data.type}
        key={data.id + data.type}
        id={data.id}
        data={data.data}
      />
    );
  });
};

export default ChartWrap;
