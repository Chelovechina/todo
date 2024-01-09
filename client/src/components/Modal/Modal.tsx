import { ChangeEventHandler, FC } from "react";

import styles from "./Modal.module.css";
import { ITodo } from "../../models/ITodo";
import { useAppDispatch } from "../../hooks/redux";
import {
  setCurrentTodoDescription,
  setCurrentTodoStatus,
  setCurrentTodoTitle,
  setIsModalOpen,
} from "../../store/reducers/TodoReducer";
import { TodoStatusEnum } from "../../types";
import Button from "../Button/Button";
import {
  useCreateTodoMutation,
  useUpdateTodoMutation,
} from "../../services/TodoService";

interface IProps {
  todo: Partial<ITodo>;
  modalType: "edit" | "create";
}

const Modal: FC<IProps> = ({ todo, modalType }) => {
  const dispatch = useAppDispatch();
  const [updateTodo] = useUpdateTodoMutation();
  const [createTodo] = useCreateTodoMutation();

  const handleClose = () => {
    dispatch(setIsModalOpen(false));
  };

  const handleStatusChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setCurrentTodoStatus(+e.target.value));
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setCurrentTodoTitle(e.target.value));
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    dispatch(setCurrentTodoDescription(e.target.value));
  };

  const handleSave = () => {
    if (modalType === "edit") {
      updateTodo(todo);
    } else if (modalType === "create") {
      createTodo(todo);
    }
    dispatch(setIsModalOpen(false));
  };

  return (
    <>
      <div onClick={handleClose} className={styles.wrapper} />
      <div className={styles.modal}>
        <h2 className={styles.title}>
          {modalType === "edit" ? "Изменить задачу" : "Создать задачу"}
        </h2>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Статус:</label>
          <select
            required
            onChange={handleStatusChange}
            className={styles.select}
            value={todo.status}
          >
            <option className={styles.option} value={TodoStatusEnum.AWAITS}>
              Ожидает выполнения
            </option>
            <option className={styles.option} value={TodoStatusEnum.EXECUTION}>
              В процессе
            </option>
            <option className={styles.option} value={TodoStatusEnum.DONE}>
              Выполнено
            </option>
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Заголовок:</label>
          <input
            required
            onChange={handleTitleChange}
            className={styles.input}
            value={todo.title}
            type="text"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Описание:</label>
          <textarea
            required
            onChange={handleDescriptionChange}
            className={styles.textarea}
            value={todo.description}
          />
        </div>
        <Button onClick={handleSave}>Сохранить задачу</Button>
      </div>
    </>
  );
};

export default Modal;
