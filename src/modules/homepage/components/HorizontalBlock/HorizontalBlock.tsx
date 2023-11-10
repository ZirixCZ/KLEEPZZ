import React, { ReactNode } from "react";
import cx from "classnames";
import Button from "./Button/Button";
import Preview from "./Preview/Preview";
import Header from "./Header/Header";
import { HeaderTextInterface } from "./types";

import styles from "./HorizontalBlock.module.css";

interface Props {
  inverse: boolean;
  buttonText?: string;
  headerContent: HeaderTextInterface[]
}

const HorizontalBlock = (props: Props) => {
  
  return (
    <div>
      {props.inverse ? (
        <div>
          {props.buttonText && <Button>{props.buttonText}</Button>}
          <div className={cx(styles.block,  styles.justifyEnd)}>
            <Preview />
            <Header>
              <HeaderText header={props.headerContent} />
            </Header>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.block}>
            <Header>
              <HeaderText header={props.headerContent} />
            </Header>
            <Preview />
          </div>

          {props.buttonText && <Button>{props.buttonText}</Button>}
        </div>
      )}
    </div>
  );
};

interface HeaderTextProps {
  header: HeaderTextInterface[];
}

const HeaderText = (props: HeaderTextProps) => {
  return (
    <>
      {props.header.map((child) => {
        return (
          <span
            className={cx({
              [styles.highlightGreen]: child.color === "green",
              [styles.highlightOrange]: child.color === "orange",
            })}
          >
            {child.text}
          </span>
        );
      })}
    </>
  );
};

export default HorizontalBlock;
