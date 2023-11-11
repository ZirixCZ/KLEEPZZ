import { useLayoutEffect, useState } from "react";
import { VideoInterface } from "../homepage/components/VideoList/types";
import { useNavigate } from "react-router-dom";
import Video from "./components/Video/Video";
import SmallButton from "../../components/SmallButton/SmallButton";
import Header from "./components/Header/Header";

import styles from "./Videos.module.css";

const Videos = () => {
  const [videos, setVideos] = useState<VideoInterface[]>([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setVideos([
      {
        id: "1",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "2",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "3",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "4",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "5",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "6",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "7",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
      {
        id: "8",
        url: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
        title: "First video",
        description: "This is the first video",
        youtubeId: "7sDY4m8KNLc",
        status: "uploaded",
        thumbnailUrl: "https://i.ytimg.com/vi/7sDY4m8KNLc/maxresdefault.jpg",
      },
    ]);
  }, []);

  const handleNewVideoClick = () => {
    navigate("/createClip");
  };

  return (
    <div className={styles.wrapper}>
      <Header>Video editor</Header>
      <div className={styles.container}>
        <div className={styles.videosWrapper}>
          {videos.map((video) => (
            <Video data={video} />
          ))}
          <Video.Placeholder onClick={handleNewVideoClick} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
