import { FC } from "react";

import Button from "./components/Button/Button";
import addIconSrc from "./assets/add.svg";
import TodoList from "./components/Todos/TodoList";
import Modal from "./components/Modal/Modal";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { prepareNewTodoCreation } from "./store/reducers/TodoReducer";

const App: FC = () => {
  const dispatch = useAppDispatch();

  const { isModalOpen, currentTodo, modalType } = useAppSelector(
    (store) => store.todoReducer
  );

  const handleCreate = () => {
    dispatch(prepareNewTodoCreation());
  };

  return (
    <>
      {isModalOpen && <Modal todo={currentTodo} modalType={modalType} />}

      <div className="container wrapper">
        <h1 className="title">Список задач</h1>
        <Button onClick={handleCreate}>
          <img src={addIconSrc} alt="Изображение знака плюс" />
          Добавить задачу
        </Button>
        <TodoList />
      </div>
    </>
  );
};

export default App;
