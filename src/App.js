import "./App.css";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home greeting="Esto es home" />
    </div>
  );
}

export default App;
