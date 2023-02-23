import { ADD, REMOVE } from "../actions/action";

initialstate = {
  counter: 0,
};

const firstReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case REMOVE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return { state };
  }
};
export default firstReducer;
