import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [team1Name, setTeam1Name] = useState("Rohit");
  const [team2Name, setTeam2Name] = useState("Roman");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isOutTeam1, setIsOutTeam1] = useState({
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p5: true,
    p6: true,
    p7: true,
  });
  const [isOutTeam2, setIsOutTeam2] = useState({
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p5: true,
    p6: true,
    p7: true,
  });

  const resetTeam1 = () => {
    setIsOutTeam1({
      p1: true,
      p2: true,
      p3: true,
      p4: true,
      p5: true,
      p6: true,
      p7: true,
    });
  };
  const resetTeam2 = () => {
    setIsOutTeam2({
      p1: true,
      p2: true,
      p3: true,
      p4: true,
      p5: true,
      p6: true,
      p7: true,
    });
  };

  const resetTeam1Score = () => {
    setTeam1Score(0);
  };
  const resetTeam2Score = () => {
    setTeam2Score(0);
  };
  return (
    <AppContext.Provider
      value={{
        team1Name,
        setTeam1Name,
        team2Name,
        setTeam2Name,
        team1Score,
        setTeam1Score,
        team2Score,
        setTeam2Score,
        isOutTeam1,
        setIsOutTeam1,
        isOutTeam2,
        setIsOutTeam2,
        resetTeam1,
        resetTeam2,
        resetTeam1Score,
        resetTeam2Score,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };