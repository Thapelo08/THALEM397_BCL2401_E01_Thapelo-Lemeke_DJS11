/* eslint-disable react/prop-types */
import { createContext, useRef } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null); // Example of audioRef initialization

  return (
    <AudioContext.Provider value={{ audioRef }}>
      {children}
    </AudioContext.Provider>
  );
};
