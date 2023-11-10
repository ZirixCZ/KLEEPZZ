import { ReactNode } from "react";

import styles from "./SmallButton.module.css";

interface Props {
  children: ReactNode;
}

const SmallButton = (props: Props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default SmallButton;
