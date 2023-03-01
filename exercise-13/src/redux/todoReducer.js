import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos.push({ text: action.payload.text, isCompleted: false });
    },
    deleteTodoAction: (state, action) => {
      const id = action.payload.id;
      state.todos.splice(id, 1);
    },
    editTodoAction: (state, action) => {
      const { id, newText } = action.payload;
      state.todos[id].text = newText;
    },
    toggleTodoCompletedAction: (state, action) => {
      const id = action.payload.id;
      state.todos[id].isCompleted = !state.todos[id].isCompleted;
    },
    deleteCompletedTodosAction: (state, action) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
  },
});

export const {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoCompletedAction,
  deleteCompletedTodosAction,
} = todoSlice.actions;
export default todoSlice.reducer;
