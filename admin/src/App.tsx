import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-sans">
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
