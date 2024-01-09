import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/TodoReducer";
import { todoApi } from "../services/TodoService";

export const store = configureStore({
  reducer: { todoReducer, [todoApi.reducerPath]: todoApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
