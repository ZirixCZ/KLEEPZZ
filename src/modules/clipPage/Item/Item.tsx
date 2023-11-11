import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import cx from "classnames";
import { SelectedClipsInterface } from "../types";
import { useClipPageContext } from "../context";

import styles from "./Item.module.css";

interface Props {
  setSelectedItems?: Dispatch<SetStateAction<SelectedClipsInterface[]>>;
  id: number;
  isActive?: boolean;
  url?: string;
}

const Item = (props: Props) => {
  const { setModalActive, setModalId } = useClipPageContext();
  const [checked, setChecked] = useState<boolean>(false);

  const onClick = () => {
    setModalActive(true);
    setModalId(props.url ?? "");
  };

  useEffect(() => {
    if (!props.setSelectedItems) {
      return;
    }

    props.setSelectedItems((prev) => {
      console.log(props.id);
      if (checked) {
        return [...prev, { id: props.id, checked }];
      } else {
        return prev.filter((item) => item.id !== props.id);
      }
    });
  }, [checked]);

  return (
    <div className={styles.container}>
      <div
        onClick={onClick}
        className={cx(styles.item, { [styles.disabled]: !props.isActive })}
      >
        {props.isActive && (
          <>
            <div className={styles.wrapper}>
              <img className={styles.playButton} src="./assets/Arrow.svg" />
            </div>
            <input
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                e.stopPropagation();
                setChecked(e.target.checked);
              }}
              type="checkbox"
              className={styles.checkbox}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
