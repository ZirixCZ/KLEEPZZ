import cx from "classnames";
import { VideoInterface } from "../../../homepage/components/VideoList/types";
import { useNavigate } from "react-router-dom";

import styles from "./Video.module.css";

interface Props {
  data: VideoInterface;
}

const Video = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate("/createClip", {
          state: { edit: true, videoId: props.data.id },
        })
      }
      className={styles.video}
    >
      <img className={styles.thumbnail} src={props.data.thumbnail} />
    </div>
  );
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
