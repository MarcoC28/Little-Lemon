import React from "react";
import Home from "./routes/Home.js";
import Reservations from "./routes/Reservations.js";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
  );
}

export default App;
