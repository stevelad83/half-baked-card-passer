import { createContext, useContext, useState } from 'react';
const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();

  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
