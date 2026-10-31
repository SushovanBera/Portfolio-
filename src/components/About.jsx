import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { GraduationCap, MapPin } from "lucide-react";

const About = ({ islightmode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const card = document.querySelector("#college-card");
    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  const techStack = [
    { src: "/icons/java.png", alt: "Java" },
    { src: "/icons/sql.png", alt: "SQL" },
    { src: "/icons/JavaScript.png", alt: "JavaScript" },
    { src: "/icons/html.png", alt: "HTML" },
    { src: "/icons/css.png", alt: "CSS" },
    { src: "/icons/vscode.png", alt: "VS Code" },
    { src: "/icons/react.png", alt: "React" },
    { src: "/icons/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/icons/BootStrap.png", alt: "Bootstrap" },
  ];

  return (
    <div
      id="about"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          About Me
        </h2>

        {/* About Text + College Card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className=" lg:w-2/3 space-y-6  text-base sm:text-md md:text-lg leading-relaxed tracking-wide text-justify transition-colors ease-linear duration-700 text-gray-600 dark:text-gray-500">
            <p>
              Hi, I'm <strong>Sushovan Bera</strong>, an aspiring{" "}
              <strong>Java Full Stack Developer</strong> and B.Tech Information
              Technology candidate based in Bangalore, India. I have strong foundational
              knowledge of <strong>Core Java</strong>,{" "}
              <strong>Object-Oriented Programming (OOP)</strong>,{" "}
              <strong>Data Structures and Algorithms (DSA)</strong>, and relational
              databases.
              <br />
              <br />
              Currently, I am undergoing intensive Java Full Stack Development training at{" "}
              <strong>QSpiders, Bangalore</strong>, building end-to-end expertise
              across <strong>JDBC, Servlets, JSP, Spring, Spring Boot, Hibernate</strong>,{" "}
              <strong>SQL (MySQL & Oracle)</strong>, and responsive web technologies.
              <br />
              <br />
              My academic and project experience includes Java desktop GUI development with
              AWT/Swing, asynchronous REST API integrations, and CNN-based image
              classification in Python. I am eager to contribute as an entry-level Java
              Developer or Java Full Stack Developer in a dynamic engineering team.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:w-1/3 flex justify-center self-start  mx-auto">
            <div
              id="college-card"
              className={`border rounded-2xl shadow-xl p-6 w-full max-w-sm
    transition-colors ease-linear duration-700 
    ${
      islightmode
        ? "bg-gray-100 border-gray-300 text-gray-600"
        : "bg-neutral-900 border-neutral-700 text-gray-300"
    }
    ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
  `}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={28} className="text-blue-500" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="border-b border-gray-300 dark:border-neutral-700 pb-3 mb-3">
                <p className="font-semibold text-base">
                  College of Engineering and Management, Kolaghat
                </p>
                <p className="text-sm">
                  B.Tech in Information Technology
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>2022 – 2026</span>
                  <span className="font-semibold text-blue-500">CGPA: 7.5 / 10</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <MapPin size={14} />
                  Kolaghat, West Bengal
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm">
                  Tamluk Hamilton High School
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Higher Secondary (WBCHSE) • 2021–2022 • <strong className="text-blue-500">87.4%</strong>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Secondary (WBBSE) • 2019–2020 • <strong className="text-blue-500">84.71%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative transition-colors ease-linear duration-700 overflow-hidden mt-16">
          <Marquee
            speed={50}
            gradient={true}
            gradientWidth={60}
            gradientColor={islightmode ? [226, 232, 240] : [23, 23, 23]}
            className="no-scrollbar pointer-events-none"
          >
            {techStack.map((icon, index) => (
              <div
                key={index}
                className={`mx-4 p-4 rounded-xl flex items-center justify-center w-24 h-24 transition-all duration-700 ease-in-out hover:scale-110 pointer-events-auto ${
                  islightmode
                    ? "bg-gray-100 hover:bg-gray-300"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-12 w-12 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
