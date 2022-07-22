import React, { createContext, ReactNode, useContext, useState } from "react";

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
