import React, { createContext, useState, useEffect } from "react";
import { translateDOM, watchDOM } from "../dom/domTranslator";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
  
      const observer = watchDOM(lang);
      translateDOM(lang); // initial run
      return () => observer.disconnect();
    
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
