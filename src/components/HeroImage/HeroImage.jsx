<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 3f25108b6adad0a44bf8ae1469fdf9c4e4e41d1c
import myimg2 from "./1 (2).png";
import "./HeroImage.css";
const HeroImage = () => {
  return (
    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 order-md-1 order-lg-2">
      <img
        src={myimg2}
        alt=""
        className="bg-white img-fluid mb-3 d-md-block mx-auto"
        id="my-pic"
      />
    </div>
  );
};

export default HeroImage;
