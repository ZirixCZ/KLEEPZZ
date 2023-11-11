import { VideoInterface } from "../homepage/components/VideoList/types";
import { useNavigate } from "react-router-dom";
import Video from "./components/Video/Video";
import Header from "./components/Header/Header";
import { GET_VIDEOS } from "../homepage/queries/getVideos";
import { useQuery } from "@apollo/client";

import styles from "./Videos.module.css";

const Videos = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_VIDEOS);

  const handleNewVideoClick = () => {
    navigate("/createClip");
  };

  return (
    <div className={styles.wrapper}>
      <Header>Video editor</Header>
      <div className={styles.container}>
        <div className={styles.videosWrapper}>
          {(data ? data.getVideos : []).map((video: VideoInterface) => (
            <Video data={video} />
          ))}
          <Video.Placeholder onClick={handleNewVideoClick} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
