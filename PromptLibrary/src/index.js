import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../app"; // Import your App component

import Trips from "./pages/trips";
import Recipe from "./pages/recipe";
import Translate from "./pages/translate";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
}
