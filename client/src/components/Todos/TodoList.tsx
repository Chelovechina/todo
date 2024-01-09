import { FC } from "react";
import { useGetAllTodosQuery } from "../../services/TodoService";

import Todo from "./Todo";
import styles from "./Todos.module.css";

const TodoList: FC = () => {
  const { data: todos } = useGetAllTodosQuery(undefined);

  return (
    <ul className={styles.list}>
      {todos?.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
