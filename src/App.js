
import './App.css';
import Navbar from './Navbar/Navbar.tsx';
import { navbarConfig } from "./Navbar/navbarConfig.tsx";

function App() {
  return (
    <div className="App">
      <Navbar config={navbarConfig} />
    </div>
  );
}

export default App;
