import React, { useEffect, useState } from "react";

import "./App.css";

import Main from "./Components/Main/Main";

function App() {
  const [pageView, setPageView] = useState("initial");
  const [luminosity, setLuminosity] = useState("dark");

  return (
    <div className="App">
      <Main
        pageView={pageView}
        luminosity={luminosity}
        setPageView={setPageView}
        setLuminosity={setLuminosity}
      />
    </div>
  );
}

export default App;
