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
  setIsFetching: Dispatch<SetStateAction<boolean>>;
  setUploaded: Dispatch<SetStateAction<boolean>>;
}

const ClipPageContext = createContext<ClipPageContextValue>({
  isFetching: false,
  uploaded: false,
  setIsFetching: () => {},
  setUploaded: () => {},
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
    value: { isFetching, uploaded, setIsFetching, setUploaded },
  } = props;
  return (
    <ClipPageContext.Provider
      value={{ isFetching, uploaded, setIsFetching, setUploaded }}
    >
      {props.children}
    </ClipPageContext.Provider>
  );
};
