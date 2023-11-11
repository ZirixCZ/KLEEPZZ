import { ReactNode } from "react";
import cx from "classnames";
import styles from "./DescriptionText.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}
const DescriptionText = (props: Props) => {
  return <p className={cx(styles.text, props.className)}>{props.children}</p>;
};

export default DescriptionText;
