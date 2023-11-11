import { useRef } from "react";
import Input from "./Input/Input";
import SmallButton from "../../../../components/SmallButton/SmallButton";
import { useClipPageContext } from "../../context";

import styles from "./Form.module.css";

interface Props {
  handleSubmit: (data: { url: string; description: string }) => void;
}

const Form = (props: Props) => {
  const { setUploaded } = useClipPageContext();
  const urlRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const clickCallback = () => {
    if (!urlRef.current?.value || !descriptionRef.current?.value) {
      console.log(urlRef.current?.value, descriptionRef.current?.value);
      return;
    }

    setUploaded(true);
    props.handleSubmit({
      url: urlRef.current?.value,
      description: descriptionRef.current?.value,
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <Input ref={urlRef} placeholder="YouTube video url" title="URL" />
        <Input
          ref={descriptionRef}
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
