import "./App.css";
import { NavBar } from "./components/navbar";
import { Presentation } from "./components/presentation/presentation";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0b0918] font-roboto ">
      <NavBar />
      <div className="flex-grow overflow-hidden">
        <Presentation />
        {/* Ajoute ton contenu ici */}
        <div></div>
      </div>
    </div>
  );
}

export default App;
