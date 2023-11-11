import cx from "classnames";
import Item from "../../Item/Item";
import { ClipInterface } from "../../types";

import styles from "./Skeleton.module.css";

interface Props {
  className: string;
}

const Skeleton = (props: Props) => {

  const clips: ClipInterface[] = [
    {
      id: 1,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
    {
      id: 2,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
    {
      id: 3,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
  ];
  return (
    <div className={cx(styles.itemListContainer, props.className)}>
      {clips.map((clip) => (
        <Item id={clip.id} />
      ))}
    </div>
  );
};

export default Skeleton;
