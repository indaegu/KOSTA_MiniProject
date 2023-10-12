import React, { useState, useEffect } from "react";
import '../App.css';

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const slides = [
    "banner2.jpg",
    "banner3.jpg",
    "banner4.jpg"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // 5초마다 슬라이드 변경

    return () => clearInterval(slideInterval);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };


  return (
    <div className="slideShow">
      <div className="slides" style={{ transform: `translateX(-${current * 33.3333}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} />
        ))}
      </div>
      <div className="slideCounter">
        {current + 1} / {slides.length}  {/* 현재 슬라이드 번호와 전체 슬라이드 수를 표시 */}
      </div>
      <button className="button" id="prev" onClick={prevSlide}>
        &laquo;
      </button>
      <button className="button" id="next" onClick={nextSlide}>
        &raquo;
      </button>
    </div>
  );
}

export default Slideshow;
