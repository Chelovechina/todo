import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { ITodo } from "../../models/ITodo";
import { TodoStatusEnum } from "../../types";

interface ITodoState {
  currentTodo: Partial<ITodo>;
  isModalOpen: boolean;
  modalType: "edit" | "create";
}

const initialState: ITodoState = {
  isModalOpen: false,
  currentTodo: { title: "", status: TodoStatusEnum.AWAITS, description: "" },
  modalType: "create",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setCurrentTodo: (state, action: PayloadAction<Partial<ITodo>>) => {
      state.currentTodo = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setCurrentTodoTitle: (state, action: PayloadAction<string>) => {
      state.currentTodo.title = action.payload;
    },
    setCurrentTodoDescription: (state, action: PayloadAction<string>) => {
      state.currentTodo.description = action.payload;
    },
    setCurrentTodoStatus: (state, action: PayloadAction<TodoStatusEnum>) => {
      state.currentTodo.status = action.payload;
    },
    setModalType: (state, action: PayloadAction<"edit" | "create">) => {
      state.modalType = action.payload;
    },
    prepareNewTodoCreation: (state) => {
      state.currentTodo = {
        title: "",
        description: "",
        status: TodoStatusEnum.AWAITS,
      };
      state.modalType = "create";
      state.isModalOpen = true;
    },
  },
});

export const {
  setCurrentTodo,
  setCurrentTodoTitle,
  setCurrentTodoStatus,
  setCurrentTodoDescription,
  setModalType,
  setIsModalOpen,
  prepareNewTodoCreation,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
