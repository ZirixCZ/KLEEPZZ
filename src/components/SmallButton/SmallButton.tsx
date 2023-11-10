import { ReactNode } from "react";
import cx from "classnames";

import styles from "./SmallButton.module.css";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const SmallButton = (props: Props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cx(styles.button, { [styles.disabled]: props.disabled })}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
