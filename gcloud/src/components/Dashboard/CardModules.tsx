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
      <CardActionArea disabled={disabled}>
        <img
          src={image}
          alt={title}
          className="h-10 max-h-10 "
        />
        <CardContent className="absolute bottom-5 left-5 h-3 w-auto">
          <Typography
            className="text-[#0DA6F6] text-lg pl-5"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardModules;
