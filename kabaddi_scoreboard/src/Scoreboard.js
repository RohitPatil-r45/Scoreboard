import React from "react";
import Controller from "./Controller";
import { useGlobalContext } from "./Context";

import Players from "./Players";
const Scoreboard = () => {
  const {
    team1Name,
    team2Name,
    team1Score,
    team2Score,
    team1Color,
    team2Color,
  } = useGlobalContext();

  return (
    <div>
      <div className="top">
        <div className="team1">
          <div
            className="teamname team1Color"
            style={{ backgroundColor: team1Color }}
          >
            {team1Name}
          </div>
          <div className="scorebox ">{team1Score}</div>
        </div>
        <div className="team2">
          <div className="scorebox">{team2Score}</div>
          <div
            className="teamname team2Color"
            style={{ backgroundColor: team2Color }}
          >
            {team2Name}
          </div>
        </div>
      </div>
      <Players />

      <Controller />
    </div>
  );
};

export default Scoreboard;
