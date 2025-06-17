import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/Slider/image1.avif";
import image2 from "../assets/Slider/image2.avif";
import image3 from "../assets/Slider/image3.avif";
import image4 from "../assets/Slider/image4.avif";
import image5 from "../assets/Slider/image5.avif";

const Hero = () => {
  const slides = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Slide Image */}
      <img
        src={currentSlide.src}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0"
      />
      {/* Overlay Text */}
      {/* <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center flex-col text-center p-6 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WELCOME TO <br />
          <span className="text-blue-400">CS CO WORKING SPACES</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white leading-relaxed">
          In a co-working space, diverse minds converge, creativity thrives, and
          collaboration soars. It's not just a place to work; it's a space to
          create, connect, and cultivate innovation.
        </p>
      </div> */}
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70"
      >
        <FaArrowRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
