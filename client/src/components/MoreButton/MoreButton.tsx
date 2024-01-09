import { FC, useState } from "react";
import { ITodo } from "../../models/ITodo";
import {
  setCurrentTodo,
  setIsModalOpen,
  setModalType,
} from "../../store/reducers/TodoReducer";
import { useAppDispatch } from "../../hooks/redux";
import { useDeleteTodoMutation } from "../../services/TodoService";
import moreImgSrc from "./../../assets/more.svg";
import editImgSrc from "./../../assets/edit.svg";
import deleteImgSrc from "./../../assets/delete.svg";
import styles from "./MoreButton.module.css";

interface IProps {
  todo: ITodo;
}

const MoreButton: FC<IProps> = ({ todo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [deletePost] = useDeleteTodoMutation();
  const dispatch = useAppDispatch();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    dispatch(setCurrentTodo(todo));
    dispatch(setModalType("edit"));
    dispatch(setIsModalOpen(true));
    setIsOpen(false);
  };

  const handleDelete = () => {
    deletePost(todo._id);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={toggleIsOpen} className={styles.btn}>
        <img src={moreImgSrc} alt="Изображение трех точек" />
      </button>

      {isOpen && (
        <div className={styles.btnsWrapper}>
          <button onClick={handleEdit} className={styles.innerBtn}>
            <img src={editImgSrc} alt="Изображение изменения" />
            Изменить
          </button>
          <button onClick={handleDelete} className={styles.innerBtn}>
            <img src={deleteImgSrc} alt="Изображение удаления" />
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreButton;
