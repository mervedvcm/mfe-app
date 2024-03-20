import React from "react";
// import { useStore } from "store/store";
import CarouselMui from "../components/Dashboard/CarouselMui";
import CardGrid from "../components/Dashboard/CardGrid";

const Dashboard = () => {
  // const { count, increment } = useStore();

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="w-full p-10">
        <CarouselMui></CarouselMui>
        <CardGrid></CardGrid>
      </div>

      {/* <div className="flex gap-x-4 w-full mx-auto ">
        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center text-white cursor-pointer font-bold border-2 rounded-md"
          onClick={redirectToGcrm}
        >
          GCRM
        </div>
        <h6>{Cookies.get("token")}</h6>
        <div
          className="bg-green-400 w-40 h-40 flex justify-center items-center cursor-pointer text-white font-bold border-2 rounded-md"
          onClick={redirectToGhr}
        >
          GHR
        </div>
      </div> */}
      {/* <div className="text-3xl mx-auto max-w-6xl">
        <div>Name: host</div>
        <div>Count: {count}</div>
        <div>
          <button
            onClick={increment}
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div> */}
    </main>
  );
};

export default Dashboard;
