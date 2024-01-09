import { FC } from "react";

import { TodoStatusEnum } from "../../types";
import styles from "./Status.module.css";

interface IProps {
  statusCode: TodoStatusEnum;
}

const Status: FC<IProps> = ({ statusCode }) => {
  if (statusCode === TodoStatusEnum.AWAITS) {
    return (
      <span className={`${styles.status} ${styles.awaits}`}>
        Ожидает выполнения
      </span>
    );
  }

  if (statusCode === TodoStatusEnum.EXECUTION) {
    return (
      <span className={`${styles.status} ${styles.execution}`}>В процессе</span>
    );
  }

  if (statusCode === TodoStatusEnum.DONE) {
    return <span className={`${styles.status} ${styles.done}`}>Выполнено</span>;
  }
};

export default Status;
