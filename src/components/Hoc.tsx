import React, { useContext } from "react";
// import { ThemeContext } from "../contexts/themeContext";
// const theme = useContext(ThemeContext);

function Inner() {
  return <span>Inner Component</span>;
}

function HC(Inner: any) {
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
  return (
    <>
      <CO />
    </>
  );
}
