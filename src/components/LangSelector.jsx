import React from "react";
import { useLang } from "./LangProvider";

function LanguageSelector() {
  const { language, changeLanguage } = useLang();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div>

      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ch">中文</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
