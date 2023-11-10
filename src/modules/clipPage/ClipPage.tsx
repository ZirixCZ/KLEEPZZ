import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

import styles from "./ClipPage.module.css";

const ClipPage = () => {
  return (
    <div className={styles.container}>
      <Header>Create a short out of your video</Header>
      <Form />
    </div>
  );
};

export default ClipPage;
