
import styles from "./MainGraphic.module.css";

interface Props {
  onClick?: () => void;
}

const MainGraphic = (props: Props) => {
  return (
    <div className={styles.background}>
      <p className={styles.text}>Funovation</p>
      <p className={styles.bigText}>
        Extract short clips from long and boring videos
      </p>
      <p className={styles.description}>
        KLEEPZ is an online video editor that allows you to extract
        short clips from long and boring videos
      </p>
      <div className={styles.padding}>
        <button onClick={props.onClick} className={styles.button}>
          Start for free
        </button>
      </div>
    </div>
  );
};

export default MainGraphic;