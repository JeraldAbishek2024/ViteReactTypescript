import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

type typeProp = {
  type: string;
};

export default function Button({ type }: typeProp) {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  let btnName: string;
  //   let btnIcon: string;
  if (type == "inc") {
    btnName = "Like";
  } else {
    btnName = "DisLike";
  }
  const handleButton = () => {
    setCount((prev) => (type == "inc" ? prev + 1 : prev - 1));
  };
  return (
    <>
      <button onClick={handleButton}>
        {btnName} {count}
        <b>{theme.theme}</b>
      </button>
    </>
  );
}
