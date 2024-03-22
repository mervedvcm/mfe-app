import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box id="hero" className="background-landing">
      <Container className="flex flex-col items-center pt-32 pb-12">
        <Stack spacing={2} useFlexGap className="w-70">
          <Typography
            component="h1"
            variant="h1"
            className="flex flex-row self-center text-center"
          >
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              className="text-[#1976d2]"
            >
              products
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. <br />
            Elevate your experience with top-tier features and services.
          </Typography>
          <Stack
            direction="row"
            alignSelf="center"
            spacing={1}
            useFlexGap
            className="pt-2 w-auto"
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button variant="contained" className=" bg-[#1976d2]">
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            className="opacity-80"
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <Box
          id="image"
          className="mt-10 self-center h-700 w-full rounded-lg border" 
          sx={() => ({
            outline: "1px solid",
            outlineColor: alpha("#BFCCD9", 0.5),
            boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
          })}
        >
          <img
            src="../../img/landing.png"
            alt="landing page"
            className="w-full h-full object-cover rounded-lg"
          />
        </Box>
      </Container>
    </Box>
  );
}
