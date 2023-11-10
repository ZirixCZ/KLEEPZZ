import React from "react";
import { ClipInterface } from "../types";

import styles from "./Item.module.css";

interface Props {
  id: number;
}

const Item = (props: Props) => {
  return <div className={styles.item} />;
};

export default Item;
