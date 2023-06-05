import React from "react";
import Login from "../login/Login";
import useOpenModel from "../../hooks/useOpenModel";
const NavLanding = () => {
  const [ 
    handelLogin,
    isOpenLogin,
    ] = useOpenModel();
  return (
    <>
      <div className="item-nav">
        <a href="#home">Home</a>
      </div>
      <div className="item-nav">
        <a href="#reviews">Reviews</a>
      </div>
      <div className="item-nav">
        <a href="#address">Address</a>
      </div>
      <div className="item-nav">
        <a href="#about">About</a>
      </div>
      <div className="item-nav">
        <a href="#services">Services</a>
      </div>
      <div className="item-nav">
        <a href="#contact">Contact</a>
      </div>

      <div className="item-nav">
        <button onClick={handelLogin}>Login</button>
        <Login handelClick={handelLogin} isOpen={isOpenLogin} />
      </div>
     
    </>
  );
};

export default NavLanding;
