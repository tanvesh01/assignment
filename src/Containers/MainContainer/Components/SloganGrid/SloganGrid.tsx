import { styled } from "@styles/stitches";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { QUERIES } from "src/constants";

const UNIQUE_SLOGANS = [
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "Review the facts cool is the best.",
];

const getRandomIndex = (lengthOfArray: number) => {
  return Math.floor(Math.random() * lengthOfArray);
};
const data = [...new Array(18)].map(() => {
  return UNIQUE_SLOGANS[getRandomIndex(UNIQUE_SLOGANS.length)];
});

const SloganGrid = () => {
  const [currentString, setCurrentString] = useState("Click to copy");

  return (
    <>
      <SloganGridContainer>
        {data.map((slogan, index) => {
          return (
            <Slogan
              key={index}
              onMouseLeave={() => setCurrentString("Click to copy")}
              onClick={() => {
                setCurrentString("Copied!");
              }}
            >
              <ToolTip>
                <p>{currentString}</p>
              </ToolTip>
              {slogan}
            </Slogan>
          );
        })}
      </SloganGridContainer>
      <Divider />
      <PaginationContainer>
        <div />
        <PaginationContainer>
          <PaginationNumber active>1</PaginationNumber>
          <PaginationNumber>2</PaginationNumber>
          <PaginationNumber>3</PaginationNumber>
          <PaginationNumber>...</PaginationNumber>
          <PaginationNumber>21</PaginationNumber>
        </PaginationContainer>
        <NextButton>
          Next <ChevronRightIcon fontSize={12} color="#146EB4" />{" "}
        </NextButton>
      </PaginationContainer>
    </>
  );
};

const NextButton = styled("button", {
  border: 0,
  backgroundColor: "white",
  display: "flex",
  fontSize: "0.875rem",
  color: "$primaryBlue",
  "& svg": {
    height: "16px",
  },
});

const PaginationNumber = styled("button", {
  borderRadius: "50%",
  padding: "5px 10px",
  border: 0,
  "&:hover": {
    backgroundColor: "$black98",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$primaryBlue",
        color: "white",
      },
      undefined: {
        color: "$primaryBlue",
        backgroundColor: "white",
      },
    },
  },
});

const PaginationContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "0 6px",
});

const Divider = styled("hr", {
  border: "1px solid $black85",
  borderWidth: "1px 0 0 0 ",
  margin: "48px 0 26px 0",
});

const ToolTip = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "none",
  fontSize: "14px",
  fontWeight: "400",
  padding: "4px 8px",
  backgroundColor: "$black30",
  color: "white",
  borderRadius: "4px",
});

const Slogan = styled("div", {
  position: "relative",
  padding: "19px 16px",
  background: "$black95",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  "&:hover": {
    cursor: "pointer",
  },
  [`&:hover ${ToolTip}`]: {
    top: "33%",
    left: "-33%",
    display: "block",
    [`@media ${QUERIES.laptopAndDown}`]: {
      top: "-33%",
      left: "0",
    },
  },
});

const SloganGridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  [`@media ${QUERIES.tabletAndDown}`]: {
    gridTemplateColumns: "1fr",
  },
});

export default SloganGrid;
