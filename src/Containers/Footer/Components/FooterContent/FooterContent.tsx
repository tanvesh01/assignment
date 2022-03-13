import { styled } from "@styles/stitches";
import React from "react";

const FooterContent = () => {
  return (
    <React.Fragment>
      <div>
        <StyledLinks>Contact</StyledLinks>
        <StyledLinks>FAQs</StyledLinks>
      </div>
      <div>
        <StyledLinks>Tutorials</StyledLinks>
        <StyledLinks>Blog</StyledLinks>
      </div>
      <div>
        <StyledLinks>Privacy</StyledLinks>
        <StyledLinks>Banned Items</StyledLinks>
      </div>
      <div>
        <StyledLinks>About</StyledLinks>
        <StyledLinks>
          Jobs <CounterTag>3</CounterTag>{" "}
        </StyledLinks>
      </div>
      <div>
        <StyledLinks>Facebook</StyledLinks>
        <StyledLinks>Twitter</StyledLinks>
        <StyledLinks>LinkedIn</StyledLinks>
      </div>
    </React.Fragment>
  );
};

const StyledLinks = styled("a", {
  fontSize: "1.125rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  gap: "0 4px",
});

const CounterTag = styled("div", {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "white",
  color: "$black12",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
});

export default FooterContent;
