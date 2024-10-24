import { useEffect, useState } from "react";
import { Button } from "../components/ui/moving-border";

export const NavBar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

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
      {isVisible && (
        <div
          className={`sticky top-0 z-10 transition-colors duration-500 ${
            isScrolled ? "bg-pink-100 text-purple-900" : " text-white"
          }`}
        >
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <h1 className="text-2xl font-bold">MARQUETTEplace</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                }`}
              >
                Qui suis-je ?
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                }`}
              >
                Expériences
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                }`}
              >
                Compétences
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isScrolled ? "hover:text-purple-600" : "hover:text-purple-300"
                }`}
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
      )}
    </>
  );
};
