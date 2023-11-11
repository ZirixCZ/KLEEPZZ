import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
