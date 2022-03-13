import { styled } from "@styles/stitches";

export const Button = styled("button", {
  borderRadius: "4px",
  border: 0,
  fontWeight: 500,
  cursor: "pointer",
  variants: {
    size: {
      large: {
        padding: "12px 24px",
        fontSize: "1.125rem",
      },
      medium: {
        padding: "8px 24px",
        fontSize: "0.875rem",
      },
    },
    type: {
      primary: {
        backgroundColor: "$primaryBlue",
        color: "white",
      },
      secondary: {
        backgroundColor: "white",
        color: "$primaryBlue",
        border: "1px solid $primaryBlue",
      },
    },
  },
});
