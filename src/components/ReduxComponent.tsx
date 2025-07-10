// import React from "react";
import {
  decremented,
  incremented,
  store,
  type stateType,
} from "../redux/store";
import { useSelector } from "react-redux";

export default function ReduxComponent() {
  const countRedux = useSelector((state: stateType) => state.value);

  return (
    <div>
      <h1>REDUX</h1>
      <h3>{countRedux}</h3>
      <button
        type="button"
        onClick={() => {
          store.dispatch(incremented());
        }}
      >
        INCREMENT
      </button>
      <button
        type="button"
        onClick={() => {
          store.dispatch(decremented());
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}
