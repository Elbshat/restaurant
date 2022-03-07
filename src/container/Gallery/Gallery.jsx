import React, { useState, useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const imgs = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  //const [first, setfirst] = useStateate(second);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="gallery  flex__center ">
      <div className="gallery__content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          laudantium nihil voluptatum laboriosam voluptatem dolores.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="gallery__images">
        <div className="gallery__images-container" ref={scrollRef}>
          {imgs.map((img, index) => (
            <div
              key={`gallery__image-${index + 1}`}
              className="gallery__images-card flex__center"
            >
              <img src={img} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery__images-arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
