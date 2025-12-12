import React from "react";
import CustomButton from "./ui/CustomButton";

const Main = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen md:max-w-xl lg:max-w-4xl flex-1 flex justify-center items-center w-full">
      <div className="p-5 text-center bg-light-dark space-y-4 rounded-md">
        <h1 className="text-2xl font-semibold">Stock Prediction Portal</h1>
        <p>
          This stock prediction application utilizes machine learning
          techniques, specifically empploying keras and LSTM model, integrated
          with the django framework. It forecasts future stock prices by
          analyzing 100-day and 200-day moving averages, essential indicators
          widely used by stock analysts to inform trading and investment
          decisions.
        </p>
        <CustomButton
          href=""
          text="Login"
          className="border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-black"
        />
      </div>
    </section>
  );
};

export default Main;
