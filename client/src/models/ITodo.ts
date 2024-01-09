import { TodoStatusEnum } from "../types";

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  status: TodoStatusEnum;
}
