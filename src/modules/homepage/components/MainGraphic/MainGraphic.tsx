
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
        Lorem ipsum dolor sit amet consectetur. Ipsum rhoncus urna consequat ac.
        Mauris viverra mi tincidunt massa sed tortor. Dictum leo mattis auctor
        at proin ultrices. Ut suspendisse ante sed leo et facilisi porta egestas
        sed.
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