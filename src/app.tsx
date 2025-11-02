// src/app.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layout/layout";  // Import Layout from the new layout directory
import Home from "./components/home/home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes will now use Layout as a wrapper */}
        <Route element={<Layout />}>  
          <Route path="/" element={<Home />} />  {/* Home route */}
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
