import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      black98: "#FAFAFA",
      black95: "#F2F2F2",
      black85: "#D9D9D9",
      black30: "#4D4D4D",
      black12: "#1A181E",
      primaryBlue: "#146EB4",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
    fonts: {
      heading: "Haas",
      para: "'Inter', sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      maxWidth: "1120px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
