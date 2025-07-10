import React, { useContext } from "react";
import {
  ThemeContext,
  type ThemeContextType,
  type ThemeType,
} from "../contexts/themeContext";

function Inner() {
  return <span>Inner Component</span>;
}

function HC(Inner: React.FC) {
  function Wrapper() {
    return (
      <>
        <Inner />
        <span>Outer Component</span>
      </>
    );
  }
  return Wrapper;
}

const CO = HC(Inner);

export default function Hoc() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <>
      <CO />
      <button type="button" onClick={toggleTheme}>
        Change Theme from {theme}
      </button>
    </>
  );
}
