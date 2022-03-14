import { styled } from "@styles/stitches";
import React from "react";

const FooterContent = () => {
  return (
    <React.Fragment>
      <div>
        <StyledLinks href="#">Contact</StyledLinks>
        <StyledLinks href="#">FAQs</StyledLinks>
      </div>
      <div>
        <StyledLinks href="#">Tutorials</StyledLinks>
        <StyledLinks href="#">Blog</StyledLinks>
      </div>
      <div>
        <StyledLinks href="#">Privacy</StyledLinks>
        <StyledLinks href="#">Banned Items</StyledLinks>
      </div>
      <div>
        <StyledLinks href="#">About</StyledLinks>
        <StyledLinks href="#">
          Jobs <CounterTag>3</CounterTag>{" "}
        </StyledLinks>
      </div>
      <div>
        <StyledLinks href="#">Facebook</StyledLinks>
        <StyledLinks href="#">Twitter</StyledLinks>
        <StyledLinks href="#">LinkedIn</StyledLinks>
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
