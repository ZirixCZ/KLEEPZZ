import cx from "classnames";
import SmallButton from "../../../components/SmallButton/SmallButton";
import { useClipPageContext } from "../context";

import styles from "./Modal.module.css";

const Modal = () => {
  const { modalActive, modalId, setModalActive, setModalId } =
    useClipPageContext();

  const onClick = () => {
    setModalActive(false);
    setModalId(null);
  };

  console.log(modalId);
  return (
    <div className={cx(styles.transition, { [styles.visible]: modalActive })}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <video src={modalId ?? ""} className={styles.content} controls />
        <SmallButton onClick={onClick}>Close</SmallButton>
      </div>
    </div>
  );
};

export default Modal;
