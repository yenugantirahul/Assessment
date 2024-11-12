import React from "react";
import "../AboutStyles/Gallery.css";
import gallery1 from "../aboutAssets/gallery1.png";
import gallery2 from "../aboutAssets/gallery2.png";
import gallery3 from "../aboutAssets/gallery3.png";
const Gallery = () => {
  return (
    <div className="gallery">
      <h3 className="gallery-heading">Gallery</h3>
      <div className="images">
        <img src={gallery1} alt="img1" />
        <img src={gallery2} alt="img1" />
        <img src={gallery3} alt="img1" />
      </div>
    </div>
  );
};

export default Gallery;
