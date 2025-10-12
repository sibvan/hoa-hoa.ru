import "the-new-css-reset/css/reset.css";
import "./styles/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Book from "./pages/Book";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:book/:chapter" element={<Book />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
