import React from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(1);
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
        setIsDesktop(true);
      } else {
        setCardsToShow(1);
        setIsDesktop(false);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectsData.length - cardsToShow ? prevIndex + 1 : prevIndex
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleError = (e) => {
    e.target.src = assets.placeholder;
  };

  const getImage = (i) => {
    const imgs = projectsData[i].images;
    if (!imgs || imgs.length === 0) return assets.placeholder;
    return imgs[0] || assets.placeholder;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {isDesktop && (
        <div className="flex justify-end items-center mb-8">
          <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2">
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2">
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
      )}

      {isDesktop ? (
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {projectsData.map((project, i) => (
              <Link
                key={project.id}
                to={`/property/${project.id}`}
                className="relative flex-shrink-0 w-1/4"
              >
                <img
                  src={getImage(i)}
                  onError={handleError}
                  alt={project.title}
                  className="w-full h-auto mb-14 hover:opacity-90 transition"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto overflow-y-hidden w-full pb-4">
          <div className="flex gap-6 px-2">
            {projectsData.map((project, i) => (
              <Link
                key={project.id}
                to={`/property/${project.id}`}
                className="relative flex-shrink-0 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-4/5 sm:w-1/2"
                style={{ minWidth: "80vw", maxWidth: "400px" }}
              >
                <img
                  src={getImage(i)}
                  onError={handleError}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    {project.price} <span>|</span> {project.location}
                  </p>
                  <div className="flex justify-center mt-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
