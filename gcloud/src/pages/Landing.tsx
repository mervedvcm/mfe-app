import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "../components/Landing/AppAppBar";
import Hero from "../components/Landing/Hero";
import Highlights from "../components/Landing/Highlights";
import Pricing from "../components/Landing/Pricing";
import Features from "../components/Landing/Features";
import Footer from "../components/Landing/Footer";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
