import { styled } from "@styles/stitches";
import Image from "next/image";
import React from "react";
import { QUERIES } from "src/constants";
import { Heading, Para } from "src/GlobalComponents";

const sharedDesc =
  "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.";

const FEATURE_DATA = [
  {
    image: "/images/Privacy.png",
    desc: sharedDesc,
    heading: "Privacy Policy Generator",
  },
  {
    image: "/images/Terms.png",
    desc: sharedDesc,
    heading: "Terms & Conditions Generator",
  },
  {
    image: "/images/Domain.png",
    desc: sharedDesc,
    heading: "Domain Name Generator",
  },
  {
    image: "/images/Invoice.png",
    desc: sharedDesc,
    heading: "Invoice Generator",
  },
];

const ProductsGrid = () => {
  return (
    <OuterContainer>
      <HeadingContainer>
        <Heading>Try our other free products</Heading>
      </HeadingContainer>
      <InnerContainer>
        {FEATURE_DATA.map((data, index) => {
          return (
            <Card key={index}>
              <Image
                src={data.image}
                width={352}
                height={200}
                alt={`${data.heading} Image`}
              />
              <CardHeading>{data.heading}</CardHeading>
              <Para>{data.desc}</Para>
            </Card>
          );
        })}
      </InnerContainer>
    </OuterContainer>
  );
};

const Card = styled("div", {
  padding: "0 0 2rem 0",
  placeSelf: "center",
  [`@media ${QUERIES.tabletAndDown}`]: {
    textAlign: "center",
  },
});

const CardHeading = styled("h5", {
  fontSize: "1.25rem",
  margin: "1rem 0 8px 0",
});

const HeadingContainer = styled("div", {
  maxWidth: "1120px",
  padding: "$$sidePadding",
  margin: "0 auto",
  marginBottom: "48px",
  [`@media ${QUERIES.tabletAndDown}`]: {
    textAlign: "center",
  },
});

const InnerContainer = styled("main", {
  maxWidth: "1120px",
  padding: "$$sidePadding",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  gap: "0 32px",
  [`@media ${QUERIES.tabletAndDown}`]: {
    gridTemplateColumns: "1fr",
  },
});

const OuterContainer = styled("div", {
  padding: "80px 0",
  backgroundColor: "white",
});

export default ProductsGrid;
