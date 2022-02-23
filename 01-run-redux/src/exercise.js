import { createStore } from 'redux';

// state
const initialState = {
  couter: 0,
  text: '',
  list: [],
};

// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LSIT = 'ADD_TO_LSIT';

// action creator
function increase() {
  return {
    type: INCREASE,
  };
}
const decrease = () => ({ type: DECREASE });
const changeText = (text) => ({ type: CHANGE_TEXT, text });
const addToList = (item) => ({
  type: ADD_TO_LSIT,
  item,
});

// reducer ***
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.couter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.couter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LSIT:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// make store
const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hey you, buddy'));
store.dispatch(addToList({ id: 1, text: 'i am 1' }));
