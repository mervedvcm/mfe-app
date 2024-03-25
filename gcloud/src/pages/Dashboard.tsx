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
    </main>
  );
};

export default Dashboard;
