import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

// import "../../../public/css/Carousel.scss";
// import Settings, { DefaultSettingsT, SettingsT } from './Settings';

const CarouselMui = () => {
  // const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
  return (
    <div style={{  }} className="w-full">
      <Carousel className="Carousel">
        {items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
      <br />
    </div>
  );
};

type Item = {
  href: string;
  image: string;
};

interface ProjectProps {
  item: Item;
}

function Project({ item }: ProjectProps) {
  return (
    <div className="Project">
      <img
        src={item.image}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="ProjectContent"></div>
    </div>
  );
}

const items: Item[] = [
  {
    // name: "Lear Music Reader",
    // description: "A PDF Reader specially designed for musicians.",
    // color: "#64ACC8",
    href: "",
    image: "../../img/slider1.png",
  },
  {
    // name: "Hash Code 2019",
    // description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    // color: "#7D85B1",
    href: "",
    image: "../../img/slider2.png",
  },
  {
    // name: "Terrio",
    // description: "A exciting mobile game game made in the Unity Engine.",
    // color: "#CE7E78",
    href: "",
    image: "../../img/slider1.png",
  },
];

export default CarouselMui;
