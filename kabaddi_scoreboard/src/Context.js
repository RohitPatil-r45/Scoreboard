import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [team1Name, setTeam1Name] = useState("Team 1 Name");
  const [team2Name, setTeam2Name] = useState("Team 2 Name");
  const [midText, setMidText] = useState(true);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team1Color, setTeam1Color] = useState("#ff0000");
  const [team2Color, setTeam2Color] = useState("#0000ff");
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

  const SwitchTeam = () => {
    setTeam1Score(team2Score);
    setTeam2Score(team1Score);
    setTeam1Name(team2Name);
    setTeam2Name(team1Name);
    setIsOutTeam1({
      p1: isOutTeam2.p7,
      p2: isOutTeam2.p6,
      p3: isOutTeam2.p5,
      p4: isOutTeam2.p4,
      p5: isOutTeam2.p3,
      p6: isOutTeam2.p2,
      p7: isOutTeam2.p1,
    });
    setIsOutTeam2({
      p1: isOutTeam1.p7,
      p2: isOutTeam1.p6,
      p3: isOutTeam1.p5,
      p4: isOutTeam1.p4,
      p5: isOutTeam1.p3,
      p6: isOutTeam1.p2,
      p7: isOutTeam1.p1,
    });
    setTeam1Color(team2Color);
    setTeam2Color(team1Color);
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
        SwitchTeam,
        team1Color,
        team2Color,
        setTeam1Color,
        setTeam2Color,
        midText,
        setMidText,
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
