import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      src: "/video1.mp4", // Replace with your first video path
      type: "video/mp4",
    },
    {
      src: "/video2.mp4", // Replace with your second video path
      type: "video/mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        key={slides[currentIndex].src}
        src={slides[currentIndex].src}
        type={slides[currentIndex].type}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center flex-col text-center p-6 text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WELCOME TO <br />{" "}
          <span className="text-blue-400">CS CO WORKING SPACES</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed">
          In a co-working space, diverse minds converge, creativity thrives, and
          collaboration soars. It's not just a place to work; it's a space to
          create, connect, and cultivate innovation.
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black transition"
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Hero;
