import cx from "classnames";
import SmallButton from "../../../components/SmallButton/SmallButton";
import { useClipPageContext } from "../context";

import styles from "./Modal.module.css";

const Modal = () => {
  const { modalActive, setModalActive, setModalId } = useClipPageContext();

  const onClick = () => {
    setModalActive(false);
    setModalId(null);
  };

  return (
    <div className={cx(styles.transition, { [styles.visible]: modalActive })}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.content} />
        <SmallButton onClick={onClick}>Close</SmallButton>
      </div>
    </div>
  );
};

export default Modal;
