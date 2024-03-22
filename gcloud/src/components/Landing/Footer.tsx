import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Gcloud </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container className="flex flex-col items-center gap-x-4 sm:gap-x-8 py-8 sm:py-10 sm:text-center">
      <Box className="flex flex-col gap-y-4 sm:flex-row w-full justify-between pb-10">
        <Box className="flex flex-col gap-y-4 sm:w-3/5">
          <Box className="sm:w-3/5">
            <Box className="-ml-15px mb-2">
              <img
                src="../../img/gcloud.svg"
                style={logoStyle}
                alt="logo of gcloud"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom className="text-left">
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2} className="text-left">
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className="flex-shrink-0 bg-[#1976d2]"
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Pricing
          </Link>
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Press
          </Link>
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box className="flex justify-between pt-8 w-full border-t border-divider text-left">
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" className="mx-0.5 opacity-50">
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          className="text-secondary"
        >
          <IconButton
            color="inherit"
            href="https://github.com/"
            aria-label="GitHub"
            className="self-center"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/"
            aria-label="X"
            className="self-center"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="self-center"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
