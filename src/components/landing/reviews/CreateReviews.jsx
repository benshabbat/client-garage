import React, { useRef, useState } from "react";
import { Rating } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { OpenModel } from "../../index";
const CreateReviews = ({ handelClick,open }) => {
  const nameRef = useRef();
  const descRef = useRef();
  const numRef = useRef();
  const maxLength = 80;
  const [star, setStar] = useState(5);

  return (
        <OpenModel
        comp={
          <form className="form">
          <CancelIcon onClick={handelClick} className="form-close" />
          <h1>garage review</h1>
          <label className="form-label">
            <Rating
              style={{ fontSize: 45, top: "15px" }}
              value={star}
              onChange={(event, newstar) => {
                setStar(newstar);
              }}
            />
          </label>
          <label className="form-label">
            <span>Name</span>
            <input
              ref={nameRef}
              type="text"
              title="Name"
              placeholder="type your name.."
            />
          </label>
          <label className="form-label">
            <span>Description </span>
            <textarea
              ref={descRef}
              maxLength={maxLength}
              type="text"
              title="Description"
              row={8}
              placeholder={`Write your review (max ${maxLength} chart)`}
              onChange={(e) =>
                (numRef.current.value =
                  maxLength - descRef.current.value.length)
              }
            />
            <input className="num" ref={numRef} value={maxLength} readOnly />
          </label>
          <button
            className="form-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log({
                name: nameRef.current.value,
                desc: descRef.current.value,
                star,
              });
              handelClick();
            }}
          >
            Add Reviews
          </button>
        </form>
        }
        open={open}
      />
  );
};

export default CreateReviews;
