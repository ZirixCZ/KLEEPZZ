import { ReactNode } from "react";
import styles from "./Button.module.css"

interface Props {
    children: ReactNode;
}

const Button = (props: Props) => {
    return (
        <button className={styles.button}>
{props.children}
        </button>
    )
}

export default Button;