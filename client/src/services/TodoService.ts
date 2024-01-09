import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../models/ITodo";

export const todoApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
  }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getAllTodos: build.query<ITodo[], undefined>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Todos"],
    }),
    deleteTodo: build.mutation<ITodo[], string>({
      query: (id) => ({
        method: "DELETE",
        url: `/${id}`,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: build.mutation<ITodo, Partial<ITodo>>({
      query: (todo) => ({
        method: "PUT",
        url: `/${todo._id}`,
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    createTodo: build.mutation<ITodo, Partial<ITodo>>({
      query: (todo) => ({
        method: "POST",
        url: "",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
