import React, {
  ChangeEventHandler,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type StateContextType = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  };
  handleClick: (clicked: string) => void;
  screenSize: undefined | number;
  setScreenSize: React.Dispatch<React.SetStateAction<undefined | number>>;
  currentColor: string;
  currentMode: string;
  setMode: (e: React.ChangeEvent) => void;
  setColor: (e: React.MouseEvent) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClicked: React.Dispatch<
    React.SetStateAction<{
      chat: boolean;
      cart: boolean;
      userProfile: boolean;
      notification: boolean;
    }>
  >;
  initalState: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  };
};

const StateContext = createContext({} as StateContextType);

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);

  const setMode = (e: React.ChangeEvent) => {
    if (e.target) {
      setCurrentMode((e.target as HTMLInputElement).value);
      localStorage.setItem("themeMode", (e.target as HTMLInputElement).value);
    }
  };
  const setColor = (e: React.MouseEvent) => {
    if (e.target) {
      setCurrentColor((e.target as HTMLInputElement).value);
      localStorage.setItem("colorMode", (e.target as HTMLInputElement).value);
    }
  };

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        setThemeSettings,
        themeSettings,
        setIsClicked,
        initalState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
