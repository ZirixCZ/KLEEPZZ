import React from 'react';
import {videos} from './videos';


import styles from './VideoList.module.css';
import VideoDisplay from './VideoDisplay/VideoDisplay'


const VideoList = () => {
    return (
        <div>
            <h1>{videos.map((x) => <VideoDisplay video={x} />)}</h1>
        </div>
    )
}

export default VideoList;