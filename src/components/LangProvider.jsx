import React, { createContext, useState, useContext } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [language, setLanguage] = useState(navigator.language.split("-")[0] || "en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
