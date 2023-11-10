import cx from 'classnames';
import { mainHeader, secondHeader, thirdHeader, fourthHeader } from './constants';
import { HorizontalBlock } from './components/HorizontalBlock';

import VideoList from './components/VideoList/VideoList';

import styles from './Homepage.module.css';

const Homepage = () => {
    return (
        <div className={styles.bg}>
        <h1 className={cx(styles.mainHeader, {
            [styles.goofyHeader]: true,
        
        })}>
            Funovation
        </h1>
        <HorizontalBlock headerContent={mainHeader} inverse={false} buttonText="Start for free" />
        <HorizontalBlock headerContent={secondHeader} inverse={true} buttonText="" />
        <HorizontalBlock headerContent={thirdHeader} inverse={false} buttonText="" />
        <HorizontalBlock headerContent={fourthHeader} inverse={true} buttonText="" />
        <VideoList />
        </div>
    );
}

export default Homepage;