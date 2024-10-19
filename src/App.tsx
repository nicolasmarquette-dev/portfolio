import "./App.css";
import { NavBar } from "./components/navbar";
import { Presentation } from "./components/presentation/presentation";

function App() {
  return (
    <div className="w-full h-full font-roboto">
      <NavBar />
      <div className="bg-[#2d2a40] h-full">
        <Presentation />
      </div>
    </div>
  );
}

export default App;
