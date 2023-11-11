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
      Id: 1,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
    {
      Id: 2,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
    {
      Id: 3,
      thumbnail: "",
      url: "",
      VideoId: 1,
    },
  ];
  return (
    <div className={cx(styles.itemListContainer, props.className)}>
      {clips.map((clip) => (
        <Item id={clip.Id} />
      ))}
    </div>
  );
};

export default Skeleton;
