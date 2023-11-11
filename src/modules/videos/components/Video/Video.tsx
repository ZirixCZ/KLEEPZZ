import cx from "classnames";
import { VideoInterface } from "../../../homepage/components/VideoList/types";

import styles from "./Video.module.css";

interface Props {
  data: VideoInterface;
}

const Video = (props: Props) => {
  return <div className={styles.video}>{props.data.id}</div>;
};

interface PlaceholderProps {
  onClick?: () => void;
}

const Placeholder = (props: PlaceholderProps) => {
  return (
    <div
      onClick={props.onClick}
      className={cx(styles.video, styles.placeholder)}
    >
      <img className={styles.plusPlaceholder} src="./assets/Plus.svg" />
    </div>
  );
};

Video.Placeholder = Placeholder;
export default Video;
