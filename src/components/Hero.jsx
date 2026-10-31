import React from "react";
import Lottie from "lottie-react";
import devAnimation from "../assets/developer.json";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Hero = ({ islightmode }) => {
  return (
    <div
      className={`min-h-screen pt-24 pb-12 px-6 sm:px-12 md:px-20 flex items-center justify-center transition-colors ease-linear duration-700 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
        {/* Left Section */}
        <div
          className={`flex flex-col justify-center gap-8 max-w-xl w-full ${
            islightmode ? "text-gray-600" : "text-gray-300"
          }`}
        >
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold flex flex-wrap items-baseline gap-2 sm:gap-4">
              <span>Hi, I'm</span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                Sushovan Bera
              </span>
            </h2>
          </div>

          <div className="w-full max-w-lg">
            <div className="text-lg sm:text-2xl font-semibold text-gray-400 mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Java Developer",
                    "Aspiring Java Full Stack Developer",
                    "Core Java & OOP Specialist",
                    "Spring Boot & SQL Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: "|",
                }}
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed text-justify sm:text-left">
              B.Tech Information Technology student with strong expertise in Core
              Java, OOP, Data Structures & Algorithms, and full-stack web development.
              Passionate about building robust, scalable applications.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 items-center">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <button className="border px-5 sm:px-6 py-3 transition-colors ease-linear duration-700 rounded-md bg-blue-700 hover:bg-blue-800 text-gray-100 font-semibold shadow-md">
                Get In Touch
              </button>
            </Link>

            <a
              href="/Sushovan_Bera_CV.pdf"
              download="Sushovan_Bera_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-block px-5 sm:px-6 py-3 rounded text-white font-semibold group shadow-md">
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x group-hover:animate-gradient-x z-0"></span>
                <span
                  className={`absolute inset-0 m-[4px] rounded-md transition-colors duration-700 z-10 ${
                    islightmode ? "bg-gray-200" : "bg-black"
                  }`}
                ></span>
                <span className="relative z-20 flex items-center gap-2">
                  <span
                    className={`font-semibold text-base sm:text-lg ${
                      islightmode ? "text-gray-700" : "text-gray-200"
                    }`}
                  >
                    Resume
                  </span>
                  <span className="animate-bounce">📩</span>
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Section (Animation) */}
        <div className="flex justify-center items-center flex-shrink-0">
          <Lottie
            animationData={devAnimation}
            loop={true}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
