import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Skeleton from "./components/Skeleton/Skeleton";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";

import styles from "./ClipPage.module.css";
import { ClipPageContextProvider } from "./context";
import { SelectedClipsInterface } from "./types";
import SmallButton from "../../components/SmallButton/SmallButton";
import { ClipInterface } from "./types";
import DescriptionText from "./DescriptionText/DescriptionText";

const Upload = () => {
  const handleFormSubmit = () => {};

  return (
    <div className={styles.container}>
      <Header>
        Create a short out
        <br />
        of your video
      </Header>
      <Form handleSubmit={handleFormSubmit} />
    </div>
  );
};

const Download = () => {
  return (
    <div className={cx(styles.container, styles.containerFillSpace)}>
      <Header className={styles.noSpaceHeading}>
        We’re making your video!
      </Header>
      <DescriptionText>(This may take a few minutes)</DescriptionText>
    </div>
  );
};

interface ShowItemsProps {
  items: ClipInterface[];
  isFetching: boolean;
}

const ShowItems = (props: ShowItemsProps) => {
  const displaySkeleton = props.isFetching || props.items.length < 1;
  const selectedItemsRef = useRef<SelectedClipsInterface[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onClick = () => {
    if (selectedItemsRef.current.length < 1) {
      setError(true);
      return;
    }
    // TODO: send the selected items to the api
    setIsDownloading(true);
    console.log(selectedItemsRef);
  };

  return (
    <>
      <Modal />
      {isDownloading ? (
        <Download />
      ) : (
        <div className={cx(styles.container, styles.gap)}>
          {displaySkeleton ? (
            <>
              <Header>Converting...</Header>
              <Skeleton className={styles.itemListContainer} />
              <DescriptionText>(This may take a few minutes)</DescriptionText>
            </>
          ) : (
            <>
              <Header>Please select your clips</Header>
              <ItemList
                itemsRef={selectedItemsRef}
                items={props.items}
                className={cx(styles.itemListContainer, styles.isWide)}
              />
              {error && (
                <DescriptionText>
                  You've got to select at least one clip
                </DescriptionText>
              )}
            </>
          )}
          {!props.isFetching && (
            <SmallButton onClick={onClick} disabled={props.isFetching}>
              Confirm
            </SmallButton>
          )}
        </div>
      )}
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
