import cx from 'classnames';
import { HorizontalBlock } from './components/HorizontalBlock';

import styles from './Homepage.module.css';

const Homepage = () => {
    return (
        <div className={styles.bg}>
        <h1 className={cx(styles.mainHeader, {
            [styles.goofyHeader]: true,
        
        })}>
            Funovation
        </h1>
        <h2 className={styles.textMessages}>
            Extract short clips from <span className={styles.highlightGreen}>long</span> and <span className={styles.highlightOrange}>boring</span> videos        </h2>
        <button className={styles.button}>
            Start for free
        </button>
        <img src="" alt="" />
        <img src="" alt="" />
        <h2>Fast and easy...</h2>
        </div>
    );
}

export default Homepage;