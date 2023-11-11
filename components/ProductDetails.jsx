import React from "react";

export const ProductDetails = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl max-w-[600px] font-bold">
        LookMark Casual Cotton Blend Shirt for Men Shirt for Men
      </h1>
      <p className="text-2xl max-w-[600px] font-bold"> ₹299</p>
      <h2 className="text-xl max-w-[600px] font-bold">Product details</h2>
      <div className="mt-5">
        <ol>
          <li className="flex justify-between">
            <p> Material CompositionCotton </p>{" "}
            <p className="text-left items-start">Blend</p>
          </li>
          <li className="flex justify-between">
            <p> Pattern</p> <p className="text-left items-start">Printed</p>
          </li>
          <li className="flex justify-between">
            <p>Fit Type</p> <p className="text-left items-start">Blend</p>
          </li>
          <li className="flex justify-between">
            <p> Sleeve Type </p>{" "}
            <p className="text-left items-start">Regliar Fit</p>
          </li>
          <li className="flex justify-between">
            <p>LengthStandard </p>{" "}
            <p className="text-left items-start">Length</p>
          </li>
          <li className="flex justify-between">
            <p> Style </p> <p className="text-left items-start">Western</p>
          </li>
          <li className="flex justify-between">
            <p> Country of Origin </p>{" "}
            <p className="text-left items-start">India</p>
          </li>
        </ol>
      </div>
    </div>
  );
};
