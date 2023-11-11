import { ForwardedRef, RefObject, forwardRef } from "react";
import cx from "classnames";

import styles from "./Input.module.css";

interface Props {
  placeholder: string;
  title?: string;
  isTall?: boolean;
}

const Input = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  return (
    <div className={styles.wrapper}>
      {props.title && <p className={styles.title}>{props.title}</p>}
      {props.isTall ? (
        <textarea
          ref={ref}
          className={cx(styles.input, { [styles.isTall]: props.isTall })}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          ref={ref}
          className={cx(styles.input, { [styles.isTall]: props.isTall })}
          type="text"
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
});

export default Input;
