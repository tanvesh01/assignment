import { styled } from "@styles/stitches";
import type { NextPage } from "next";
import React from "react";
import FeaturesGrid from "src/Containers/FeaturesGrid/FeaturesGrid";
import Footer from "src/Containers/Footer/Footer";
import MainContainer from "src/Containers/MainContainer/MainContainer";
import Navbar from "src/Containers/Navbar/Navbar";
import ProductsGrid from "src/Containers/ProductsGrid/ProductsGrid";

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <BlueBackgroundBanner />
      <Navbar />
      <MainContainer />
      <FeaturesGrid />
      <ProductsGrid />
      <Footer />
    </GlobalContainer>
  );
};

const GlobalContainer = styled("div", {
  $$sidePadding: "0",
  position: "relative",
  [`@media (max-width:${1120}px)`]: {
    $$sidePadding: "0 1rem",
  },
});

const BlueBackgroundBanner = styled("div", {
  position: "absolute",
  top: 0,
  left: "0",
  width: "100%",
  height: "328px",
  backgroundColor: "$primaryBlue",
  zIndex: 0,
});

export default Home;
