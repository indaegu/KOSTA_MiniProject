import React, { useState, useEffect } from "react";
import '../App.css';

function Slideshow() {
  const [isAnimating, setIsAnimating] = useState(true);  // 애니메이션 상태 추가
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
    if (current === slides.length - 1) {  // 마지막 슬라이드일 경우
      setIsAnimating(false);  // 애니메이션 잠시 끄기
      setCurrent(0);  // 첫 번째 슬라이드로 즉시 변경

      setTimeout(() => {  // 약간의 딜레이 후 애니메이션 다시 켜기
        setIsAnimating(true);
      }, 50);
    } else {
      setCurrent(current + 1);
    }
  };


  return (
    <div className="slideShow">
      {/* 조건부 스타일링 적용 */}
      <div className="slides" style={{
        transform: `translateX(-${current * 33.3333}%)`,
        transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
      }}>
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
