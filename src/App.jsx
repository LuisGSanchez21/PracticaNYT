import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Article from "./pages/Article";
import Category from "./pages/Category";
import { LangProvider } from "./components/LangProvider.jsx";
import LanguageSelector from "./components/LangSelector.jsx";

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <div>
          <LanguageSelector />
          <Header />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<Article />} />
            <Route path="/:category" element={<Category />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
