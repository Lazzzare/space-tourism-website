import Destination from "./components/Destination";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </>
    )
  );

  return (
    <div className="px-6 pt-5">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
