import { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";

export const NavBar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false); // Cache le composant si l'écran est plus petit que 768px
      } else {
        setIsVisible(true); // Affiche le composant si l'écran est plus grand ou égal à 768px
      }
    };

    // Écouter les changements de la taille de la fenêtre
    window.addEventListener("resize", handleResize);

    // Exécuter une première fois au montage pour vérifier la taille initiale
    handleResize();

    // Nettoyer l'écouteur au démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          className={`h-[10vh] top-0 sticky z-10 transition-colors duration-500 ${
            isScrolled ? "bg-[#ffffff]" : "bg-transparent text-white"
          }`}
        >
          <div className="mx-4 sm:mx-6 lg:mx-10 flex justify-between items-center h-full">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold overflow-hidden transform transition-transform duration-300 hover:scale-105">
              MARQUETTEplace
            </div>

            <div className=" hidden items-center space-x-[4vw] md:flex">
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
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
};
