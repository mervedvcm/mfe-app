import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

// import "../../../public/css/Carousel.scss";
// import Settings, { DefaultSettingsT, SettingsT } from './Settings';

const CarouselMui = () => {
  // const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
  return (
    <div style={{  }} className="w-full">
      {/* <Typography variant='h4'>Example: Learus Projects (random)</Typography>
            <br/> */}
      <Carousel className="Carousel">
        {items.map((item, index) => {
          return <Project item={item} key={index} />;
        })}
      </Carousel>
      <br />
      {/* <Settings settings={settings} setSettings={setSettings} /> */}
    </div>
  );
};

type Item = {
  // name: string,
  // description: string,
  // color: string,
  href: string;
  image: string;
};

interface ProjectProps {
  item: Item;
}

function Project({ item }: ProjectProps) {
  return (
    <Paper className="Project" elevation={10}>
      <img
        src={item.image}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="ProjectContent">
        {/* İsteğe bağlı olarak başlık, açıklama ve buton ekleyebilirsiniz */}
        {/* <Typography variant='h5'>{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
                    Check it out!
                </Button> */}
      </div>
    </Paper>
  );
}

const items: Item[] = [
  {
    // name: "Lear Music Reader",
    // description: "A PDF Reader specially designed for musicians.",
    // color: "#64ACC8",
    href: "",
    image: "../../img/slider1.jpg",
  },
  {
    // name: "Hash Code 2019",
    // description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    // color: "#7D85B1",
    href: "",
    image: "../../img/slider2.jpg",
  },
  {
    // name: "Terrio",
    // description: "A exciting mobile game game made in the Unity Engine.",
    // color: "#CE7E78",
    href: "",
    image: "../../img/slider1.jpg",
  },
];

export default CarouselMui;
