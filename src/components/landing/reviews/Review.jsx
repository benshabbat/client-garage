import React from "react";
import { Rating } from "@mui/material";
import moment from "moment";
const Review = ({ customer, index }) => {
  return (
    <div className="one-review" key={index}>
      <h1>{customer.name}</h1>
      <Rating value={customer.stars} readOnly />
      <div className="desc">{customer.description}</div>
      <div className="desc">{moment(customer.updatedAt).startOf("ss").fromNow()}</div>
    </div>
  );
};

export default Review;
