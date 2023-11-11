import styles from "./Footer.module.css";
import SmallButton from "../../SmallButton/SmallButton";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>KLEEPZZ @ Funovation</p>
      <p className={styles.year}>2023</p>
    </div>
  );
};

export default Footer;
