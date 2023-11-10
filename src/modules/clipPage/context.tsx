import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";

interface ClipPageContextValue {
  isFetching: boolean;
  uploaded: boolean;
  modalActive: boolean;
  modalId: number | null;
  setIsFetching: Dispatch<SetStateAction<boolean>>;
  setUploaded: Dispatch<SetStateAction<boolean>>;
  setModalActive: Dispatch<SetStateAction<boolean>>;
  setModalId: Dispatch<SetStateAction<number | null>>;
}

const ClipPageContext = createContext<ClipPageContextValue>({
  isFetching: false,
  uploaded: false,
  modalActive: false,
  modalId: null,
  setIsFetching: () => {},
  setUploaded: () => {},
  setModalActive: () => {},
  setModalId: () => {},
});

export const useClipPageContext = () => {
  return useContext(ClipPageContext);
};

interface Props {
  value: ClipPageContextValue;
  children: ReactNode;
}

export const ClipPageContextProvider = (props: Props) => {
  const {
    value: {
      isFetching,
      uploaded,
      modalActive,
      modalId,
      setIsFetching,
      setUploaded,
      setModalActive,
      setModalId,
    },
  } = props;
  return (
    <ClipPageContext.Provider
      value={{
        isFetching,
        uploaded,
        setIsFetching,
        setUploaded,
        modalActive,
        modalId,
        setModalActive,
        setModalId,
      }}
    >
      {props.children}
    </ClipPageContext.Provider>
  );
};
