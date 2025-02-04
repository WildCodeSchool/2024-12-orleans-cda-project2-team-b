import { createContext, useEffect, useState } from 'react';

export const ChoicesContext = createContext();

export const ChoicesContextProvider = ({ children }) => {
  // const [storageLocalOk, setStorageLocalOk]=useState(false);
  const choiceLocalStorage = localStorage.getItem('choiceLocalStorage');

  //   useEffect(() => {
  //     if (choiceLocalStorage === 'yes') {
  //     }
  //   }, []);

  return <ChoicesContext.Provider value={{ choiceLocalStorage }}>{children}</ChoicesContext.Provider>;
};
