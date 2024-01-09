import { FC } from "react";

import { ITodo } from "../../models/ITodo";
import styles from "./Todos.module.css";
import Status from "../Status/Status";
import MoreButton from "../MoreButton/MoreButton";

interface IProps {
  todo: ITodo;
}

const Todo: FC<IProps> = ({ todo }) => {
  return (
    <li className={styles.item}>
      <div className={styles.header}>
        <Status statusCode={todo.status} />
        <MoreButton todo={todo} />
      </div>
      <h5 className={styles.title}>{todo.title}</h5>
      <p className={styles.description}>{todo.description}</p>
    </li>
  );
};

export default Todo;
