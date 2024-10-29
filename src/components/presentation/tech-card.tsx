import "./tech-card.css";

import ReactLogo from "../../assets/react.svg";
import JavaLogo from "../../assets/java-logo.png";
import SpringLogo from "../../assets/spring-logo.png";
import MysqlLogo from "../../assets/mysql-logo.png";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Divider = (): JSX.Element => {
  return (
    <div className="w-full my-12 flex justify-center">
      <div className="h-0.5 bg-purple-400 w-[80%] sm:w-[60%] lg:w-[40%]" />
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
    if (isReactInView && !hasReactViewed) setHasReactViewed(true);
    if (isJavaInView && !hasJavaViewed) setHasJavaViewed(true);
    if (isMysqlInView && !hasMysqlViewed) setHasMysqlViewed(true);
  }, [isReactInView, isJavaInView, isMysqlInView]);

  return (
    <div className="bg-gradient-to-br from-red-900 to-indigo-900 text-white pb-6">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center py-10 sm:py-16 tracking-widest font-bold">
        Mon expertise
      </h1>
      <motion.div
        ref={reactRef}
        initial={{ x: "-90vw" }}
        animate={hasReactViewed ? { x: 10 } : { x: "-90vw" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20 ">
          <div className="w-[80vw] sm:w-[60vw] lg:w-[30vw] bg-black/30 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6 ">
              <h2 className="text-lg lg:text-xl font-semibold mb-4 underline">
                ReactJs
              </h2>
              <p className="text-sm lg:text-base tracking-widest">
                Je maîtrise parfaitement ReactJs avec TypeScript, ce qui me
                permet de développer des interfaces utilisateur robustes et
                typées pour des applications web modernes.
              </p>
            </div>
          </div>
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img
              src={ReactLogo}
              className="w-full h-auto animate-spin-slow App-logo"
              alt="React logo"
            />
          </div>
        </div>
      </motion.div>
      <Divider />
      <motion.div
        ref={javaRef}
        initial={{ x: "90vw" }}
        animate={hasJavaViewed ? { x: 0 } : { x: "90vw" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20">
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={JavaLogo} className="w-full h-auto" alt="Java logo" />
          </div>
          <div className="w-[80vw] sm:w-[60vw] lg:w-[30vw] bg-black/30 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4 underline">
                Java Spring
              </h2>
              <p className="text-sm lg:text-base tracking-widest">
                Je maîtrise le langage Java ainsi que le framework Spring, ce
                qui me permet de concevoir et développer des applications
                backend robustes, évolutives et performantes.
              </p>
            </div>
          </div>
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={SpringLogo} className="w-full h-auto" alt="Spring logo" />
          </div>
        </div>
      </motion.div>
      <Divider />
      <motion.div
        ref={mysqlRef}
        initial={{ x: "-90vw" }}
        animate={hasMysqlViewed ? { x: 10 } : { x: "-90vw" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap space-y-8 lg:space-y-0 lg:space-x-10 px-4 lg:px-20">
          <div className="w-[30vw] sm:w-[20vw] lg:w-[20vw]">
            <img src={MysqlLogo} className="w-full h-auto" alt="MySQL logo" />
          </div>
          <div className="w-[80vw] sm:w-[60vw] lg:w-[30vw] bg-black/30 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4 underline">
                MySQL
              </h2>
              <p className="text-sm lg:text-base tracking-widest">
                Je possède une expertise solide en bases de données MySQL, me
                permettant de concevoir et d'optimiser efficacement des systèmes
                de gestion de données fiables et performants.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
