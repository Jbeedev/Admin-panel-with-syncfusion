import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}



export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C907");
  const [currentMode, setCurrentMode] = useState("Light");

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value);

    setThemeSettings(false);
  }

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem('theme', color);

    setThemeSettings(false);
  }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

  const [screenSize, setScreenSize] = useState(undefined)

  const [themeSettings, setThemeSettings] = useState(false)

    
    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
          themeSettings,
          setThemeSettings,
          setColor,
          setMode,
          currentMode,
          currentColor,
        }}
      >
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)