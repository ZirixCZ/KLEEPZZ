import { useRef } from "react";
import Input from "./Input/Input";
import SmallButton from "../../../../components/SmallButton/SmallButton";

import styles from "./Form.module.css";

const Form = () => {
  const urlRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <Input
          ref={urlRef}
          placeholder="YouTube video url..."
          title="Description"
        />
        <Input
          ref={urlRef}
          placeholder="YouTube video url..."
          title="Description"
          isTall={true}
        />
        <SmallButton>Upload</SmallButton>
      </div>
    </div>
  );
};

export default Form;
