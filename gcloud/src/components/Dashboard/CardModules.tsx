import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface CardModulesProps {
  image: string;
  title: string;
  onClick?: () => void; // Tıklanabilirlik için bir onClick fonksiyonu eklendi
  disabled?: boolean; // Kartın tıklanabilir olup olmadığını belirlemek için bir disabled prop'u eklendi
}

const CardModules: React.FC<CardModulesProps> = ({
  image,
  title,
  onClick,
  disabled,
}) => {
  return (
    <Card
      className="m-5 border rounded-2xl h-52 flex"
      onClick={onClick}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <CardActionArea disabled={disabled} className="relative">
        <div className="absolute top-10 left-10">
          <img src={image} alt={title} className="h-10 max-h-10 " />
        </div>
        <CardContent className="absolute bottom-10 left-10 w-auto p-0 flex items-center">
          <Typography
            className="text-[#0DA6F6] text-base font-bold m-0"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <img src="/icon/arrow_ico.svg" alt="Arrow Icon" className="ml-4"/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardModules;
