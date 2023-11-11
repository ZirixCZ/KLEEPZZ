import styles from "./Graphic.module.css";

interface Props {
    source: string;
}


const Graphic = (props: Props) => {
    return (
        <div className={styles.center}>
            <img src={props.source}/>
        </div>
    );
};

export default Graphic;