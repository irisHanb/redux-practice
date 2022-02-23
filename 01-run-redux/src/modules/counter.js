// action types
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECRAESE = 'counter/DECRAESE';

// action creator
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECRAESE });

// initial state
const initialState = {
  number: 0,
  diff: 1,
};

//  reducer 는 export default
export default function counter(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };

    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECRAESE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}