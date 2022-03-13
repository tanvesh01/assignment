import { styled } from "@styles/stitches";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image width={156} height={44} src="/images/white.svg" alt="logo" />
      <NavLinksContainer>
        <NavLink href="#">Sign in</NavLink>
        <NavLink href="#" fill={true}>
          Dukaan for PC
        </NavLink>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

const NavLink = styled("a", {
  color: "white",
  fontSize: "1.2rem",
  variants: {
    fill: {
      true: {
        color: "$primaryBlue",
        background: "white",
        padding: "12px 24px",
        borderRadius: "4px",
        fontWeight: 500,
        [`@media (max-width:${736}px)`]: {
          display: "none",
        },
      },
    },
  },
});

const NavLinksContainer = styled("div", {
  display: "flex",
  gap: "0 32px",
  alignItems: "center",
});

const NavbarContainer = styled("nav", {
  maxWidth: "1120px",
  padding: "$$sidePadding",
  paddingTop: "20px",
  paddingBottom: "20px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "$primaryBlue",
  zIndex: 1,
  position: "relative",
});

export default Navbar;
