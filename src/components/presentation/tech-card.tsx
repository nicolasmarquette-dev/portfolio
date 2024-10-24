import "./tech-card.css";
import { motion, useInView } from "framer-motion";
import { CardSpotlight } from "../ui/card-spotlight";
import ReactLogo from "../../assets/react.svg";
import JavaLogo from "../../assets/java-logo.png";
import SpringLogo from "../../assets/spring-logo.png";
import MysqlLogo from "../../assets/mysql-logo.png";
import { useEffect, useRef, useState } from "react";

const Divider = (): JSX.Element => {
  return (
    <div className="w-full my-12 flex justify-center">
      <div className="h-0.5 bg-[#c785f2] w-[80%] sm:w-[60%] lg:w-[40%]" />
    </div>
  );
};

export const TechCard = (): JSX.Element => {
  const reactRef = useRef(null);
  const isReactInView = useInView(reactRef);
  const [hasReactViewed, setHasReactViewed] = useState(false);
  const javaRef = useRef(null);
  const isJavaInView = useInView(javaRef);
  const [hasJavaViewed, setHasJavaViewed] = useState(false);
  const mysqlRef = useRef(null);
  const isMysqlInView = useInView(mysqlRef);
  const [hasMysqlViewed, setHasMysqlViewed] = useState(false);

  useEffect(() => {
    if (isReactInView && !hasReactViewed) {
      setHasReactViewed(true);
    }
    if (isJavaInView && !hasJavaViewed) {
      setHasJavaViewed(true);
    }
    if (isMysqlInView && !hasMysqlViewed) {
      setHasMysqlViewed(true);
    }
  }, [isReactInView, isJavaInView, isMysqlInView]);

  return (
    <div className="text-white">
      <h1 className="underline text-3xl sm:text-4xl lg:text-6xl text-center py-10 sm:py-16 tracking-widest">
        Mon expertise
      </h1>
      <motion.div
        ref={reactRef}
        initial={{ x: "0vw" }} // Départ hors de l'écran à gauche
        animate={hasReactViewed ? { x: 10 } : { x: "-90vw" }} // Animation basée sur la visibilité
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20">
          <CardSpotlight className="w-[80vw] sm:w-[60vw] lg:w-[30vw] rounded-3xl text-center">
            <h2 className="underline text-lg lg:text-xl">ReactJs</h2>
            <br />
            <div className="text-sm lg:text-base tracking-widest">
              Je maîtrise parfaitement ReactJs avec TypeScript, ce qui me permet
              de développer des interfaces utilisateur robustes et typées pour
              des applications web modernes.
            </div>
          </CardSpotlight>
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img
              src={ReactLogo}
              className="w-full h-auto App-logo"
              alt="React logo"
            />
          </div>
        </div>
      </motion.div>
      <Divider />
      <motion.div
        ref={javaRef}
        initial={{ x: "0vw" }} // Départ hors de l'écran à gauche
        animate={hasJavaViewed ? { x: 0 } : { x: "90vw" }} // Animation basée sur la visibilité
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20">
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={JavaLogo} className="w-full h-auto" alt="Java logo" />
          </div>
          <CardSpotlight className="w-[80vw] h-[50vw] sm:w-[60vw] sm:h-auto lg:w-[30vw] rounded-3xl text-center h-auto">
            <h2 className="underline text-lg lg:text-xl">Java Spring</h2>
            <br />
            <div className="text-sm lg:text-base tracking-widest">
              Je maîtrise le langage Java ainsi que le framework Spring, ce qui
              me permet de concevoir et développer des applications backend
              robustes, évolutives et performantes
            </div>
          </CardSpotlight>
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={SpringLogo} className="w-full h-auto" alt="Spring logo" />
          </div>
        </div>
      </motion.div>
      <Divider />
      <motion.div
        ref={mysqlRef}
        initial={{ x: "0vw" }} // Départ hors de l'écran à gauche
        animate={hasMysqlViewed ? { x: 10 } : { x: "-90vw" }} // Animation basée sur la visibilité
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20">
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={MysqlLogo} className="w-full h-auto" alt="MySQL logo" />
          </div>
          <CardSpotlight className="w-[80vw] sm:w-[60vw] lg:w-[30vw] rounded-3xl text-center">
            <h2 className="underline text-lg lg:text-xl">MySQL</h2>
            <br />
            <div className="text-sm lg:text-base tracking-widest">
              Je possède une expertise solide en bases de données MySQL, me
              permettant de concevoir et d’optimiser efficacement des systèmes
              de gestion de données fiables et performants.
            </div>
          </CardSpotlight>
        </div>
      </motion.div>
    </div>
  );
};
