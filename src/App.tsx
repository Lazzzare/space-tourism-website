import Destination from "./components/Destination";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const [width, setWidth] = useState(false);

  // disappear HTML elements
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");

    const handleQuery = (e: MediaQueryListEvent) => {
      setWidth(e.matches);
    };

    query.addEventListener("change", handleQuery);

    setWidth(query.matches);

    return () => {
      query.removeEventListener("change", handleQuery);
    };
  });

  return (
    <div
      className={`px-6 pt-5 ${
        location.state ? location.state : "home"
      } min-h-screen md:p-0 relative`}
    >
      <Header width={width} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew width={width} />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
