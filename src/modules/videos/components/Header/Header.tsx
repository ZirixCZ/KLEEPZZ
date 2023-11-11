import { ReactNode } from "react";

import styles from "./Header.module.css";

interface Props {
  children: ReactNode;
}

const Header = (props: Props) => {
  return <h1 className={styles.header}>{props.children}</h1>;
};

export default Header;
