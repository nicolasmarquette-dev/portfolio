import { motion, useInView } from "framer-motion";
import "./App.css";
import { Experiences } from "./components/experiences";
import { NavBar } from "./components/navbar";
import { Presentation } from "./components/presentation/presentation";
import { useRef } from "react";

const squareEffect = (): JSX.Element => {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount:"all"});
  return (
  <div ref={ref} className="relative mx-auto grid h-32 w-96 place-content-center z-0">
  <h1 className="relative z-0 text-3xl text-white uppercase">Travaillons ensemble !</h1>
  <motion.div animate={{y: isInView ? "100%" : "0%"}} className="absolute bottom-0 left-0 top-0 z-1 w-1/3 bg-indigo-500"></motion.div>
  <motion.div animate={{y: isInView ? "-100%" : "0%"}} className="absolute bottom-0 left-1/3 top-0 z-1 w-1/3 bg-indigo-500"></motion.div>
  <motion.div animate={{y: isInView ? "100%" : "0%"}} className="absolute bottom-0 left-2/3 top-0 z-1 w-1/3 bg-indigo-500"></motion.div>

  </div>)
}


function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 font-roboto">
      <NavBar />
      <div className="flex-grow overflow-hidden ">
        <Presentation />
        <Experiences />
        {squareEffect()}
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
