import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Dashboard",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    image: "url(../../img/landing.png)",
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Mobile integration",
    description:
      "This item could provide information about the mobile app version of the product.",
    image: "url(../../img/landing-mobile.png)",
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Available on all platforms",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    image: "url(../../img/landing-devices.png)",
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" className="py-8 sm:py-16">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="mb-2 sm:mb-4"
            >
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the
              types of features, add-ons, or the benefits of the features.
            </Typography>
          </div>
          <Grid container item gap={1} className="hidden xs:flex sm:hidden">
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                className={`border-primary-light ${
                  selectedItemIndex === index
                    ? "bg-primary-main text-white"
                    : "bg-transparent"
                }`}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            className="hidden xs:flex sm:hidden mt-4"
          >
            <Box
              className={`bg-cover bg-center bg-no-repeat h-280 ${items[selectedItemIndex].image}`}
            />
            <Box className="px-2 pb-2">
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                className="my-0.5"
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                className="inline-flex items-center hover:translate-x-2"
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  className="mt-1 ml-2"
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            className="w-full hidden xs:flex sm:flex"
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                className={`p-3 fit-content w-full bg-none ${
                  selectedItemIndex === index ? "bg-action-selected" : ""
                }`}
              >
                <Box className="flex flex-col md:flex-row md:items-center gap-2.5">
                  <Box className="text-primary-main">{icon}</Box>
                  <Box className="text-left">
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      className="my-0.5"
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      className="inline-flex items-center hover:translate-x-2"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        className="mt-1 ml-2"
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} className="flex sm:w-full">
          <Card
            variant="outlined"
            className="w-full hidden xs:flex sm:flex flex-col items-center justify-center pointer-events-none"
          >
            <Box
              sx={{
                m: "auto",
                width: 420,
                height: 500,
                backgroundSize: "contain",
                backgroundImage: items[selectedItemIndex].image,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
