import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import ConfigProvider from "./providers/ConfigProvider";
function App() {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
