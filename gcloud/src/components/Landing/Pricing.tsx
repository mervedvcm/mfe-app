import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      className="pt-12 pb-16 relative flex flex-col items-center gap-6"
    >
      <Box className="text-center w-3/5">
        <Typography component="h2" variant="h4" className="text-[#131B20]">
          Pricing
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quickly build an effective pricing table for your potential customers
          with this layout. <br />
          It is built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card
              className="p-2 flex flex-col gap-4"
              sx={{
                border: tier.title === "Professional" ? "1px solid" : undefined,
                borderColor:
                  tier.title === "Professional" ? "primary.main" : undefined,
                background:
                  tier.title === "Professional"
                    ? "linear-gradient(#033363, #021F3B)"
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  className="mb-1 flex justify-between items-center"
                  sx={{
                    color: tier.title === "Professional" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === "Professional" && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        backgroundColor: "primary.contrastText",
                        "& .MuiChip-label": {
                          color: "primary",
                        },
                        "& .MuiChip-icon": {
                          color: "primary",
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    color:
                      tier.title === "Professional" ? "grey.50" : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    per month
                  </Typography>
                </Box>
                <Divider className="my-2 opacity-20 border border-gray-500" />
                {tier.description.map((line) => (
                  <Box key={line} className="py-1 flex gap-6 items-center">
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === "Professional"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === "Professional"
                            ? "grey.200"
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  component="a"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
