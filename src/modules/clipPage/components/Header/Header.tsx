import { ReactNode } from "react";

import styles from "./Header.module.css";

interface Props {
  children: ReactNode;
}

const Header = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{props.children}</h1>
    </div>
  );
};

export default Header;
