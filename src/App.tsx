import Destination from "./components/Destination";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  const location = useLocation();

  return (
    <div
      className={`px-6 pt-5 ${
        location.state ? location.state : "home"
      } min-h-screen md:p-0 relative`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
