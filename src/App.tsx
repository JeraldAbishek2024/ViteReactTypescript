import {
  useRef,
  useEffect,
  useReducer,
  // useContext,
  // createContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import reactLogo from "./assets/react.svg";
import TSLogo from "./assets/typescript.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
// import { ThemeContext } from "./contexts/themeContext";
import Hoc from "./components/Hoc";
import { ThemeContext, type ThemeType } from "./contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReduxComponent from "./components/ReduxComponent";
import PlayerButton from "./components/PlayerButton";
import CD from "./components/CD";

enum countAction {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

interface actionType {
  type: countAction;
}

interface countState {
  counter: number;
}

function App() {
  // const [count, setCount] = useState(0);
  const ref = useRef(0);

  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    ref.current += 1;
  });

  const counterReducer = (state: countState, action: actionType) => {
    switch (action.type) {
      case countAction.INCREMENT:
        return { counter: state.counter + 1 };
      case countAction.DECREMENT:
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  };

  type addNumType = (n: number) => number;

  const addNum: addNumType = (n) => {
    if (n <= 1) return n;
    return addNum(n - 1) + addNum(n - 2);
    // return n;
  };

  const [state, dispatch] = useReducer(counterReducer, { counter: 1 });

  const memoNumber = 10;

  const num2 = useMemo(() => addNum(memoNumber), [memoNumber]);
  const num3 = useCallback(() => setNum((num) => num + 5), [memoNumber]);

  //
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeContextValue = { theme, toggleTheme };

  return (
    <>
      <Provider store={store}>
        <ThemeContext value={themeContextValue}>
          <Header />
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://www.typescriptlang.org" target="_blank">
              <img src={TSLogo} className="logo TS" alt="TS logo" />
            </a>
          </div>
          <CD />
          <h1 className="center_title">Vite + React + Typescript</h1>
          <div className="card">
            <input
              type="text"
              name=""
              id=""
              value={ref.current}
              readOnly={true}
            />
            <Button type={"inc"} />
            <Button type={"dec"} />
            <h1>{"Memo value : " + num2}</h1>
            <h1>{num}</h1>
            <button onClick={num3}>Add 5</button>
            <p style={{ margin: "1rem" }}></p>
            <input type="text" value={state.counter} readOnly={true} />
            <button
              type="button"
              onClick={() => {
                dispatch({ type: countAction.INCREMENT });
              }}
            >
              Increment
            </button>
            <p>{theme}</p>
            <button type="button" onClick={toggleTheme}>
              Change Theme from {theme}
            </button>
          </div>
          <Hoc />
          <ReduxComponent />
          <PlayerButton />
        </ThemeContext>
      </Provider>
    </>
  );
}

export default App;
