import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<IProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
