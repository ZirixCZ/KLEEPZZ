import { ReactNode } from "react";
import cx from "classnames";

import styles from "./Header.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={cx(styles.header, props.className)}>{props.children}</h1>
    </div>
  );
};

export default Header;
