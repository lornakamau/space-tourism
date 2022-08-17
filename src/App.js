import Burger from './components/Burger';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Burger/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
    
  );
}

export default App;
