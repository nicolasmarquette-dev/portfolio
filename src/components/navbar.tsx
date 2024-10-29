import { useEffect, useState } from "react";
import { Button } from "../components/ui/moving-border";
import { useScroll, motion, useTransform } from "framer-motion";

export const NavBar = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const background = useTransform(
    scrollYProgress,
    [0,1],
    ["#FFFFFF","#6366F1"]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          className={`sticky top-0 z-10 transition-colors duration-500 ${
            isScrolled ? "bg-gray-200 text-purple-900 " : " text-white"
          }`}
        >
          <motion.div
    style={{
      scaleX: scrollYProgress,
      background,
      x:"-50%",
      y:"-50%",
    }}
    className="fixed left-1/2 top-0 h-4 w-screen bg-indigo-500"
    ></motion.div>
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-2xl font-bold">MARQUETTEplace</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                } transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                Qui suis-je ?
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                } transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                Expériences
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                } transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                Compétences
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                } transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                Formations
              </a>
            </nav>
            <Button
              variant="outline"
              className={`${
                isScrolled
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-white text-purple-900 hover:bg-purple-100"
              }`}
            >
              Me contacter
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-[10vh]"></div>
      )}
    </>
  );
};
