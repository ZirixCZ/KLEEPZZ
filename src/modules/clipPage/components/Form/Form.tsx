import { useRef } from "react";
import Input from "./Input/Input";
import SmallButton from "../../../../components/SmallButton/SmallButton";
import { useClipPageContext } from "../../context";

import styles from "./Form.module.css";

interface Props {
  handleSubmit: () => void;
}

const Form = (props: Props) => {
  const { setUploaded } = useClipPageContext();
  const urlRef = useRef<HTMLInputElement>(null);

  const clickCallback = () => {
    setUploaded(true);
    props.handleSubmit();
  };

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <Input ref={urlRef} placeholder="YouTube video url" title="URL" />
        <Input
          ref={urlRef}
          placeholder="Short description of the video"
          title="Description"
          isTall={true}
        />
        <SmallButton onClick={clickCallback}>Upload</SmallButton>
      </div>
    </div>
  );
};

export default Form;
