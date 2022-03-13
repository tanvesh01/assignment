import { styled } from "@styles/stitches";

export const Heading = styled("h1", {
  letterSpacing: "-0.04em",
  lineHeight: "42px",
  fontWeight: 600,
  color: "$black12",
  marginBottom: "1rem",
});

export const Heading5 = styled("h5", {
  color: "$black30",
  lineHeight: "28px",
  fontSize: "20px",
  fontWeight: "400",

  variants: {
    dark: {
      true: {
        color: "$black12",
        fontWeight: 500,
      },
    },
  },
});
