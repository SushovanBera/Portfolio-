import React from "react";
import { ExternalLink, Gamepad2, CloudSun, Activity } from "lucide-react";

const Projects = ({ islightmode }) => {
  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Developed a two-player desktop game with a 3x3 game board and player-turn management using Java AWT and Swing. Implemented win and draw detection using two-dimensional arrays and conditional logic.",
      tech: ["Java", "AWT", "Swing", "OOP"],
      icon: Gamepad2,
      gradient: "from-blue-600 to-indigo-600",
      link: "",
    },
    {
      title: "Simple Weather Application",
      description:
        "Built a responsive web application to retrieve and display real-time weather information through API integration. Implemented asynchronous fetch() requests, DOM manipulation, input validation, and error handling.",
      tech: ["HTML5", "CSS3", "JavaScript", "WeatherAPI", "REST API"],
      icon: CloudSun,
      gradient: "from-amber-500 to-orange-600",
      link: "",
    },
    {
      title: "Lung Cancer Detection System",
      description:
        "Developed an academic CNN-based multi-class image classification model for categorizing lung CT scan images. Applied image resizing, normalization, and data augmentation, and evaluated training and validation metrics.",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
      icon: Activity,
      gradient: "from-emerald-600 to-teal-700",
      link: "",
    },
  ];

  return (
    <div
      id="projects"
      className={`transition-colors ease-linear duration-700 min-h-screen py-10 px-6 md:px-20 ${
        islightmode ? "text-black bg-gray-200" : "text-white bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl ${
                islightmode
                  ? "bg-gray-200 text-gray-800"
                  : "bg-neutral-800 text-gray-200"
              }`}
            >
              {/* Project Image / Visual Banner */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-contain object-top"
                />
              ) : (
                <div
                  className={`w-full h-44 flex flex-col items-center justify-center bg-gradient-to-br ${project.gradient} text-white p-6 relative overflow-hidden`}
                >
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
                  {project.icon && (
                    <project.icon size={48} className="mb-2 drop-shadow-md" />
                  )}
                  <span className="text-xs uppercase tracking-widest font-semibold opacity-90">
                    Academic Project
                  </span>
                </div>
              )}

              {/* Project Details */}
              <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 transition-colors ease-linear duration-700 rounded-full ${
                          islightmode ? "bg-gray-300" : "bg-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="mt-4 pt-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                      <span>Source code available on request</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
