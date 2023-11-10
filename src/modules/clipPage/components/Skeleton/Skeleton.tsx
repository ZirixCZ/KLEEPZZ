import Item from "../../Item/Item";
import { ClipInterface } from "../../types";

import styles from "./Skeleton.module.css";

const Skeleton = () => {
  const clips: ClipInterface[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <div className={styles.itemListContainer}>
      {clips.map((clip) => (
        <Item id={clip.id} />
      ))}
    </div>
  );
};

export default Skeleton;
