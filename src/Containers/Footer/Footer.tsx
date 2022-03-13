import { styled } from "@styles/stitches";
import Image from "next/image";
import React from "react";
import FooterContent from "./Components/FooterContent/FooterContent";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <Image width={156} height={44} src="/images/white.svg" alt="logo" />
        <FooterContentContainer>
          <FooterContent />
        </FooterContentContainer>
      </FooterInnerContainer>

      <Divider />
      <FooterInnerContainer spaceBetween>
        <p>Dukaan 2020, All rights reserved.</p>
        <FooterContentContainer small>
          <span>Made in </span>{" "}
          <Image src="/images/Indian_flag.png" width={27} height={17} />
        </FooterContentContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

const Divider = styled("hr", {
  border: "1px solid rgb(255, 255, 255, 0.2)",
  borderWidth: "1px 0 0 0",
  maxWidth: "$maxWidth",
  width: "100%",
  margin: "40px auto 0 auto",
});

const FooterContentContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  variants: {
    small: {
      true: {
        width: "auto",
        gap: "0 7px",
      },
      undefined: {
        [`@media (max-width:${736}px)`]: {
          flexDirection: "column",
          marginTop: "2rem",
          gap: 0,
        },
      },
    },
  },
});

const FooterInnerContainer = styled("div", {
  maxWidth: "$maxWidth",
  padding: "$$sidePadding",
  margin: "0 auto",
  border: "1px solid black",
  height: "100%",
  display: "flex",
  gap: "0 132px",
  alignItems: "flex-start",
  paddingTop: "64px",
  variants: {
    spaceBetween: {
      true: {
        gap: 0,
        justifyContent: "space-between",
        padding: "$$sidePadding",
        // @ts-ignore
        paddingTop: "24px",
        paddingBottom: "24px",
      },
    },
  },
  "& p, span": {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
  },
  [`@media (max-width:${736}px)`]: {
    flexWrap: "wrap",
    gap: 0,
  },
});

const FooterContainer = styled("footer", {
  backgroundColor: "$black12",
  border: "1px solid black",
  width: "100%",
});

export default Footer;
