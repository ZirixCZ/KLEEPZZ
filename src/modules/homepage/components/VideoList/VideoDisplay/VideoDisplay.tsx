import { VideoInterface } from "../types";

import styles from "./VideoDisplay.module.css";

interface Props{
    video: VideoInterface;
}


const VideoDisplay = (props: Props) => {
    return (
        <div className={styles.display}>
            
        </div>
    )
};

export default VideoDisplay;