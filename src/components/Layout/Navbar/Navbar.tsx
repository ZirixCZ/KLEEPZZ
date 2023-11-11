import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import SmallButton from "../../SmallButton/SmallButton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <p onClick={() => navigate("/")} className={styles.name}>
        KLEEPZZ
      </p>
      <div className={styles.items}>
        <a onClick={() => navigate("/")} className={styles.text}>
          Home
        </a>
        <SmallButton onClick={() => navigate("/videos")}>
          Free trial
        </SmallButton>
      </div>
    </div>
  );
};

export default Navbar;
