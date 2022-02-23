let nextId = 1; // 고유 id

// state
const initialState = [
  // {
  //   id: 1,
  //   text: 'exam',
  //   done: false,
  // },
];

// action types
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// action creator
export const addTodo = (text) => ({ type: ADD_TODO, todo: { id: nextId++, text } });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));

    default:
      return state;
  }
}
