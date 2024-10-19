import { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";

export const NavBar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'événement d'écouteur au démontage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[10vh] top-0 sticky z-10 transition-colors duration-500 ${
        isScrolled ? "bg-[#ffffff]" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-4 sm:mx-6 lg:mx-10 flex justify-between items-center h-full">
        <div className="text-lg sm:text-xl lg:text-2xl font-bold">
          MARQUETTEplace
        </div>

        <div className="flex items-center space-x-[4vw]">
          <div>Qui suis-je ?</div>
          <div>Expériences</div>
          <div>Compétences</div>
          <div>Formations</div>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Me contacter
          </Button>
        </div>
        <div className="sm:hidden text-base font-medium">Menu</div>
      </div>
    </div>
  );
};
