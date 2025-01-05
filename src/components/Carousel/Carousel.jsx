
import React, { useState, useEffect } from "react";
import "./Carousel.css";
import portrait from "../../assets/carousel/portrait.png"
import cave from "../../assets/carousel/cave.png"
import afternoon from "../../assets/carousel/afternoon.png"
import skyline from "../../assets/carousel/skyline.png"

const images = [
  portrait,
  cave,
  afternoon,
  skyline,
];

export const Carousel = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img src={images[ currentIndex ]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
