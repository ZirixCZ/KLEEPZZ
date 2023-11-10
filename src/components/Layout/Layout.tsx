import { ReactNode } from "react";

import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div>
      <div>navbar</div>
      <div className={styles.wrapper}>{props.children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
