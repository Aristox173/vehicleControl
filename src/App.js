import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

const App = () => {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <BrowserRouter>
          <RoutesConfig />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
