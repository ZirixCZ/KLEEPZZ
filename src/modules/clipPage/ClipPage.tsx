import { useEffect, useState } from "react";
import cx from "classnames";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Skeleton from "./components/Skeleton/Skeleton";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";

import styles from "./ClipPage.module.css";
import { ClipPageContextProvider, useClipPageContext } from "./context";
import SmallButton from "../../components/SmallButton/SmallButton";
import { ClipInterface } from "./types";

const Upload = () => {
  const handleFormSubmit = () => {};

  return (
    <div className={styles.container}>
      <Header>Create a short out of your video</Header>
      <Form handleSubmit={handleFormSubmit} />
    </div>
  );
};

interface ShowItemsProps {
  items: ClipInterface[];
  isFetching: boolean;
}

const ShowItems = (props: ShowItemsProps) => {
  const displaySkeleton = props.isFetching || props.items.length < 1;
  const [selectedItems, setSelectedItems] = useState<ClipInterface[]>([]);

  return (
    <>
      <Modal />
      <div className={cx(styles.container, styles.gap)}>
        {displaySkeleton ? (
          <Skeleton className={styles.itemListContainer} />
        ) : (
          <ItemList
            items={props.items}
            className={cx(styles.itemListContainer, styles.isWide)}
          />
        )}
        <SmallButton disabled={props.isFetching}>
          {props.isFetching ? "Loading..." : "Confirm"}
        </SmallButton>
      </div>
    </>
  );
};

const ClipPage = () => {
  const [uploaded, setUploaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState<number | null>(null);

  const [items, setItems] = useState<ClipInterface[]>([]);

  useEffect(() => {
    if (!uploaded) {
      return;
    }

    setIsFetching(true);

    // TOOD : fetch the api
    setTimeout(() => {
      setItems([
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ]);
      setIsFetching(false);
    }, 1500);
  }, [uploaded]);

  return (
    <ClipPageContextProvider
      value={{
        isFetching,
        uploaded,
        modalActive,
        modalId,
        setIsFetching,
        setUploaded,
        setModalActive,
        setModalId,
      }}
    >
      {uploaded ? (
        <ShowItems items={items} isFetching={isFetching} />
      ) : (
        <Upload />
      )}
    </ClipPageContextProvider>
  );
};

export default ClipPage;
