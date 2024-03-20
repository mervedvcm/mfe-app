import * as React from "react";
import Grid from "@mui/material/Grid";
import CardModules from "./CardModules"; // Yukarıdaki CardModules bileşenini ekleyin
import { useNavigate } from "react-router-dom";

// Dinamik içerik için bir örnek dizi
const items = [
  {
    id: 1,
    image: "../../img/crmCard.jpg",
    title: "MODÜLE GİT",
    disabled: false, // Örnek kartın tıklanabilirlik durumu
  },
  {
    id: 2,
    image: "../../img/hrCard.jpg",
    title: "MODÜLE GİT",
    disabled: false, // Örnek kartın tıklanabilirlik durumu
  },
  {
    id: 3,
    image: "../../img/rentCard.jpg",
    title: "DETAYA GİT",
    disabled: true, // Örnek kartın tıklanabilirlik durumu
  },
  {
    id: 4,
    image: "../../img/chargeCard.jpg",
    title: "DETAYA GİT",
    disabled: true, // Örnek kartın tıklanabilirlik durumu
  },
  {
    id: 5,
    image: "../../img/controlCard.jpg",
    title: "DETAYA GİT",
    disabled: true, // Örnek kartın tıklanabilirlik durumu
  },
  {
    id: 6,
    image: "../../img/cardCard.jpg",
    title: "DETAYA GİT",
    disabled: true, // Örnek kartın tıklanabilirlik durumu
  },
];

export default function CardGrid() {
    const path = localStorage.getItem("companyName");
    const navigate = useNavigate();
    const redirectToGcrm = () => {
        navigate(`/${path}/gcrm`, { replace: true });
    };
    const redirectToGhr = () => {
        navigate(`/${path}/ghr`);
    };
    const handleClick = (id: number) => {
        switch (id) {
            case 1:
                redirectToGcrm();
                break;
            case 2:
                redirectToGhr();
                break;
            default:
                break;
        }
    }
    
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id} justifyContent="center" alignItems="center">
          <CardModules
            image={item.image}
            title={item.title}
            onClick={() => !item.disabled && handleClick(item.id)} // Tıklanabilirlik durumuna göre handleClick() fonksiyonu çağrılır
            disabled={item.disabled} // Kartın tıklanabilirlik durumu belirlenir
          />
        </Grid>
      ))}
    </Grid>
  );
}
