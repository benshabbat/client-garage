import React from "react";
import { Rating } from "@mui/material";
const Review = ({ customer, index }) => {
  return (
    <div className="one-review" key={index}>
      <h1>{customer.name}</h1>
      <Rating value={customer.stars} readOnly />
      <div className="desc">{customer.desc}</div>
    </div>
  );
};

export default Review;
