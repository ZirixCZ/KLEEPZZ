import styles from "./StepDisplay.module.css";


interface Props{
    headerText: string;
    descriptionText: string;
}



const StepDisplay = (props: Props) => {
    return (
        <div>
            <h2 className={styles.header}>{props.headerText}</h2>
            <p className={styles.description}>{props.descriptionText}</p>
        </div>
    );
};

export default StepDisplay;