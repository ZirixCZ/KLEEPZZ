import { ReactNode } from "react";
import styles from "./Header.module.css";

interface Props {
  children: ReactNode;
}

const Header = (props: Props) => {
  return <h2 className={styles.textMessages}>{props.children}</h2>;
};

export default Header;
