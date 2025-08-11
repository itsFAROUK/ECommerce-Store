import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { FilterProvider } from "./FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <FilterProvider>
        <App />
      </FilterProvider>
    </HashRouter>
  </StrictMode>,
);
