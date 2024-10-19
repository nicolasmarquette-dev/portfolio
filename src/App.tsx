import "./App.css";
import { NavBar } from "./components/navbar";
import { Presentation } from "./components/presentation/presentation";
import { Button } from "./components/ui/moving-border";

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
    </div>
  );
}

export default App;
