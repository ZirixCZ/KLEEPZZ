import { RefObject } from "react";
import cx from "classnames";

import styles from "./Input.module.css";

interface Props {
  ref: RefObject<any>;
  placeholder: string;
  title?: string;
  isTall?: boolean;
}

const Input = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.title && <p className={styles.title}>{props.title}</p>}
      {props.isTall ? (
        <textarea
          ref={props.ref}
          className={cx(styles.input, { [styles.isTall]: props.isTall })}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          ref={props.ref}
          className={cx(styles.input, { [styles.isTall]: props.isTall })}
          type="text"
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};

export default Input;
