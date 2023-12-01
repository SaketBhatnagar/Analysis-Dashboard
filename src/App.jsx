import React from "react";
import LineChart from "./components/LineChart";
import Head from "./components/Head";
import Top_Inputs from "./components/Top_Inputs";
import Card from "./components/Card";
import ChartGen from "./components/ChartGen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChartWrap from "./components/ChartWrap";

export const App = () => {
  return (
    <section className="bg-slate-100  h-screen overflow-auto pb-48 w-full">
      <article className="px-4 md:px-7  py-5 flex flex-col flex-wrap gap-4  w-full">
        <Head />
        <Top_Inputs />
        <div className=" flex gap-5 flex-wrap py-3">
          <Card />
        </div>
        <Provider store={store}>
          <div className="p-3  flex gap-7 rounded-lg flex-wrap ">
            <ChartWrap />
          </div>
        </Provider>
      </article>
    </section>
  );
};
