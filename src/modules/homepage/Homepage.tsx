import cx from 'classnames';
import { mainHeader, secondHeader, thirdHeader, fourthHeader } from './constants';
import { HorizontalBlock } from './components/HorizontalBlock';
import MainGraphic from './components/MainGraphic/MainGraphic';
import { useNavigate } from "react-router-dom";

import VideoList from './components/VideoList/VideoList';

import styles from './Homepage.module.css';
import StepDisplay from './components/StepDisplay/StepDisplay';
import Graphic from './components/Graphic/Graphic';

const Homepage = () => {
    const navigate = useNavigate();
    return (
      <div className={styles.bg}>
        <MainGraphic onClick={() => navigate("/videos")} />
        <StepDisplay
          headerText="Step one: upload a YouTube video URL"
          descriptionText="Upload a YouTube video URL and we'll automatically generate a short clips for you."
        />
        <Graphic source="./assets/Group2.svg" />
        <StepDisplay
          headerText="Step two: select your clips"
          descriptionText="Select the clips which fit your story. You can select as many as you want."
        />
        <div className={styles.wrapper}>
          <Graphic source="./assets/Row21.svg" />
          <Graphic source="./assets/Row22.svg" />
        </div>
        <StepDisplay
          headerText="Step three: enjoy your clips"
          descriptionText="Download your clips and enjoy them!"
        />
        <Graphic source="./assets/Row3.svg" />
        <div className={styles.center}>
          <button
            onClick={() => navigate("/videos")}
            className={styles.bottomButton}
          >
            Try now
          </button>
        </div>
      </div>
    );
}

export default Homepage;