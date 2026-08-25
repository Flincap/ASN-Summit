import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted typefaces, so the site does not depend on Google Fonts.
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
