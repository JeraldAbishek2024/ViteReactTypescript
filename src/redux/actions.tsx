import { INCREMENT, DECREMENT } from "./actionTypes";

type countAction = () => {
  type: string;
};

export const increment: countAction = () => ({
  type: INCREMENT,
});

export const decrement: countAction = () => ({
  type: DECREMENT,
});
