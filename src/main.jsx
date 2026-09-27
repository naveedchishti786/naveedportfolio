import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";

// ===== CONSOLE WELCOME MESSAGE =====
console.log(
  "%c👋 Muhammad Naveed | MERN Stack Developer",
  `
    font-size: 18px;
    font-weight: bold;
    color: #3b82f6;
  `
);
console.log(
  "%c🔗 GitHub: https://github.com/naveedchishti786",
  "font-size: 12px; color: #8b5cf6;"
);
console.log(
  "%c🔗 LinkedIn: https://linkedin.com/in/naveedchishti",
  "font-size: 12px; color: #8b5cf6;"
);

// ===== GET ROOT ELEMENT =====
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure there is a <div id='root'></div> in your index.html"
  );
}

// ===== CREATE ROOT & RENDER =====
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);