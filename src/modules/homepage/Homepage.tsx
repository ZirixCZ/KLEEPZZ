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
          headerText="Step one: upload a YouTube video"
          descriptionText="Lorem ipsum dolor sit amet consectetur. Ipsum rhoncus urna consequat ac. Mauris viverra mi tincidunt massa sed tortor. Dictum leo mattis auctor at proin ultrices. Ut suspendisse ante sed leo et facilisi porta egestas sed."
        />
        <Graphic />
        <StepDisplay
          headerText="Step two: select your clips"
          descriptionText="Lorem ipsum dolor sit amet consectetur. Ipsum rhoncus urna consequat ac. Mauris viverra mi tincidunt massa sed tortor. Dictum leo mattis auctor at proin ultrices. Ut suspendisse ante sed leo et facilisi porta egestas sed."
        />
        <StepDisplay
          headerText="Step three: enjoy your goth mommy"
          descriptionText="Lorem ipsum dolor sit amet consectetur. Ipsum rhoncus urna consequat ac. Mauris viverra mi tincidunt massa sed tortor. Dictum leo mattis auctor at proin ultrices. Ut suspendisse ante sed leo et facilisi porta egestas sed."
        />
      </div>
    );
}

export default Homepage;