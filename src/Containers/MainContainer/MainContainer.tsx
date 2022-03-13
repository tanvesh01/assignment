import { styled } from "@styles/stitches";
import React, { useState } from "react";
import {
  Button,
  Heading,
  Heading5,
  InputWithClearButton,
} from "src/GlobalComponents";
import SloganGrid from "./Components/SloganGrid/SloganGrid";

const MainContainer = () => {
  const [sloganWord, setSloganWord] = useState<string>("");
  return (
    <StyledMainContainer>
      <ContentContainer>
        <Heading>Free slogan maker</Heading>
        <Description>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </Description>
        <StyledLabel htmlFor="keyword_input">Word for your slogan</StyledLabel>
        <InputWithClearButton
          placeholder="Enter your Keyword..."
          value={sloganWord}
          setValue={setSloganWord}
          name="keyword"
        />
        <SubmitButton type="primary" size="large">
          Generate slogans
        </SubmitButton>
        <Divider />
        <HeadingContainer>
          <Heading5 dark>We have generated 1,023 slogans for “cozy”</Heading5>
          <Button type="secondary" size="medium">
            Download all
          </Button>
        </HeadingContainer>
        <SloganGrid />
      </ContentContainer>
    </StyledMainContainer>
  );
};

const HeadingContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "32px",

  [`@media (max-width:${736}px)`]: {
    flexWrap: "wrap",
    gap: "1rem 0",
  },
});

const Description = styled(Heading5, {
  marginBottom: "48px",
});

const Divider = styled("hr", {
  border: "1px solid $black85",
  borderWidth: "1px 0 0 0 ",
  margin: "48px 0",
});

const SubmitButton = styled(Button, {
  marginTop: "48px",
});

const StyledLabel = styled("label", {
  display: "block",
  color: "$black30",
  fontSize: "1rem",
  marginBottom: "8px",
  fontWeight: 500,
});

const ContentContainer = styled("div", {
  maxWidth: "736px",
  margin: "0 auto",
  paddingBottom: "66px",
});

const StyledMainContainer = styled("main", {
  maxWidth: "$maxWidth",
  padding: "$$sidePadding",
  margin: "64px auto 80px auto",
  paddingTop: "64px",
  borderRadius: "8px",
  boxShadow: "0px 2px 8px rgba(26, 24, 30, 0.06)",
  backgroundColor: "white",
  zIndex: 2,
  position: "relative",
});

export default MainContainer;
