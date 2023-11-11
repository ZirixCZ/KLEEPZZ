import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import cx from "classnames";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Skeleton from "./components/Skeleton/Skeleton";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";

import { ClipPageContextProvider } from "./context";
import { SelectedClipsInterface } from "./types";
import SmallButton from "../../components/SmallButton/SmallButton";
import { ClipInterface } from "./types";
import DescriptionText from "./DescriptionText/DescriptionText";
import { PROCESS_YOUTUBE_VIDEO } from "./queries/processYoutubeVideo";
import { GET_VIDEOS } from "../homepage/queries/getVideos";
import { GENERATE_REEL } from "./queries/generateReel";

import styles from "./ClipPage.module.css";
import { GET_VIDEO } from "../homepage/queries/getVideo";

interface UploadProps {
  setVideoUploadData: Dispatch<
    SetStateAction<{ url: string; description: string } | undefined>
  >;
}

const Upload = (props: UploadProps) => {
  const handleFormSubmit = (data: { url: string; description: string }) => {
    props.setVideoUploadData(data);
  };

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

interface DownloadProps {
  clips: RefObject<SelectedClipsInterface[]>;
  videoId: number | null;
}

const Download = (props: DownloadProps) => {
  const [reel, { data }] = useMutation(GENERATE_REEL);

  useEffect(() => {
    if (!props.clips.current || props.clips.current.length < 1) {
      return;
    }

    const clipIds = props.clips.current.map((clip) => clip.id);

    reel({
      variables: {
        req: {
          clipIds,
          videoId: props.videoId,
        },
      },
    });
  }, [props]);

  const downloadVideo = () => {
    if (!data || !data.generateReel?.URL) {
      return;
    }

    const link = document.createElement("a");
    link.href = data.generateReel.URL;
    link.download = "reel.mp4";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={cx(styles.container, styles.containerFillSpace)}>
      <Header className={styles.noSpaceHeading}>
        {!data ? "We’re making your video!" : "Your video is ready!"}
      </Header>
      {!data && (
        <DescriptionText>(This may take a few minutes)</DescriptionText>
      )}
      {data && (
        <div className={styles.downloadVideoContainer}>
          <video src={data.generateReel.URL} controls />
          <div className={styles.buttonWraper}>
            <SmallButton onClick={downloadVideo}>Download</SmallButton>
          </div>
        </div>
      )}
    </div>
  );
};

interface ShowItemsProps {
  items: ClipInterface[] | undefined;
  isFetching: boolean;
  isEdit: boolean;
  videoId: number | null;
}

const ShowItems = (props: ShowItemsProps) => {
  const displaySkeleton =
    props.isFetching || !props.items || props.items.length < 1;
  const selectedItemsRef = useRef<SelectedClipsInterface[]>([]);
  const [clips, setClips] = useState<ClipInterface[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [getVideo, { data, loading, error: queryError }] =
    useLazyQuery(GET_VIDEO);

  useEffect(() => {
    if (props.items && props.items?.length > 0) {
      setClips(props.items);
      return;
    }

    if (data?.getVideo) {
      setClips(data?.getVideo.clips);
    }
  }, [data, props.items]);

  useEffect(() => {
    if (props.isEdit && props.videoId) {
      console.log(props.videoId);
      getVideo({
        variables: {
          internalId: props.videoId,
        },
      });
    }
  }, []);

  const onClick = () => {
    if (selectedItemsRef.current.length < 1) {
      setError(true);
      return;
    }
    // TODO: send the selected items to the api
    setIsDownloading(true);
  };

  return (
    <>
      <Modal />
      {isDownloading ? (
        <Download videoId={props.videoId} clips={selectedItemsRef} />
      ) : (
        <div className={cx(styles.container, styles.gap)}>
          {displaySkeleton && !props.isEdit ? (
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
                items={clips}
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
  const [modalId, setModalId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [videoId, setVideoId] = useState<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setIsEdit(location.state?.edit);
    setVideoId(location.state?.videoId);
  }, [location]);

  const [videoUploadData, setVideoUploadData] = useState<{
    url: string;
    description: string;
  }>();

  const [videos] = useLazyQuery(GET_VIDEOS);

  const [processYoutubeVideo, { data, loading, error }] = useMutation(
    PROCESS_YOUTUBE_VIDEO
  );

  const [items, setItems] = useState<ClipInterface[]>([]);

  useEffect(() => {
    if (!uploaded || !videoUploadData) {
      return;
    }

    processYoutubeVideo({
      variables: {
        req: {
          url: videoUploadData.url,
          title: "test",
          description: videoUploadData.description,
        },
      },
    }).finally(() => {
      navigate("/videos");
    });
  }, [uploaded, videoUploadData]);

  useEffect(() => {
    if (!isFetching || !loading) {
      return;
    }

    setItems(data);
  }, [loading, isFetching, data]);

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
      {uploaded || isEdit ? (
        <ShowItems
          videoId={videoId}
          isEdit={isEdit}
          items={items}
          isFetching={isFetching}
        />
      ) : (
        <Upload setVideoUploadData={setVideoUploadData} />
      )}
    </ClipPageContextProvider>
  );
};

export default ClipPage;
