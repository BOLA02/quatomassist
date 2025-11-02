// src/app.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layout/layout";  // Import Layout from the new layout directory
import Home from "./components/home/home";
import Event from "./components/events/events";

import SeminarPageZero from "./components/events/zero";
import SeminarPage1 from "./components/events/first";
import SeminarPage2 from "./components/events/second";
import SeminarPage3 from "./components/events/third";
import SeminarPage4 from "./components/events/fourth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes will now use Layout as a wrapper */}
        <Route element={<Layout />}>  
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/events" element={<Event />} />  {/* Events route */}
          <Route path="/events/zero" element={<SeminarPageZero />} />
          <Route path="/events/first" element={<SeminarPage1 />} /> 
          <Route path="/events/second" element={<SeminarPage2 />} /> 
          <Route path="/events/third" element={<SeminarPage3 />} /> 
          <Route path="/events/fourth" element={<SeminarPage4 />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
