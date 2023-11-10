import React from "react";
import cx from "classnames";
import { ClipInterface } from "../types";
import { useClipPageContext } from "../context";

import styles from "./Item.module.css";

interface Props {
  id: number;
  isActive?: boolean;
}

const Item = (props: Props) => {
  const { setModalActive, setModalId } = useClipPageContext();

  const onClick = () => {
    setModalActive(true);
    setModalId(props.id);
  };

  return (
    <div
      onClick={onClick}
      className={cx(styles.item, { [styles.disabled]: !props.isActive })}
    />
  );
};

export default Item;
