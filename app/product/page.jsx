import React from "react";
import { ImageContainer } from "@/components/ImageContainer";

import { ProductDetails } from "@/components/ProductDetails";
import { Review } from "@/components/Review";
const Product = () => {
  return (
    <>
     <div className=" m-auto max-md:flex-col flex max-w-[1400px]">
      <ImageContainer />
      <ProductDetails />
     
    </div>
     <Review/></>

   
  );
};

export default Product;
