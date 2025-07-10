import { INCREMENT, DECREMENT } from "./actionTypes";

const initialState: stateType = {
  count: 0,
};

type actionType = {
  type: string;
};

type stateType = {
  count: number;
};

const counterReducer = (
  state: stateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
