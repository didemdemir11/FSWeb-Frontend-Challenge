import React, { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import useLocalStorage from "./hooks/useLocalStorage";
import languagesData from "./data/languagesData";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <div className="App">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
