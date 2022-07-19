import React from "react";
import { ChromePicker } from "react-color";
import { useGlobalContext } from "./Context";
import { FaPlusCircle, FaMinusCircle, FaExchangeAlt } from "react-icons/fa";

const Controller = () => {
  const {
    team1Name,
    setTeam1Name,
    team2Name,
    setTeam2Name,
    team1Score,
    setTeam1Score,
    team2Score,
    setTeam2Score,
    resetTeam1,
    resetTeam2,
    resetTeam1Score,
    resetTeam2Score,
    SwitchTeam,
    team1Color,
    team2Color,
    setTeam1Color,
    setTeam2Color,
  } = useGlobalContext();

  return (
    <>
      <button type="button" onClick={SwitchTeam} className="Switch-btn">
        <FaExchangeAlt /> Switch Team <FaExchangeAlt />
      </button>

      <div className="controller">
        <div className="team1Controller">
          <div>
            <label>Team 1 Name : </label>
            <input
              type="text"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="sub-btn"
              onClick={() => setTeam1Score(team1Score - 1)}
            >
              <FaMinusCircle />
            </button>
            <label>
              {team1Name.substring(0, 10)} Score : {team1Score}
            </label>
            <button
              type="button"
              className="add-btn"
              onClick={() => setTeam1Score(team1Score + 1)}
            >
              <FaPlusCircle />
            </button>
          </div>
          <div>
            <button type="button" className="btn" onClick={resetTeam1Score}>
              Reset Team 1 Score
            </button>
            <button type="button" className="btn" onClick={resetTeam1}>
              Reset Team 1 Players
            </button>
          </div>
          <div>
            <ChromePicker
              color={team1Color}
              onChangeComplete={(color) => setTeam1Color(color.hex)}
              disableAlpha={true}
            />
          </div>
        </div>
        <div className="team2Controller">
          <div>
            <label>Team 2 Name : </label>
            <input
              type="text"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="sub-btn"
              onClick={() => setTeam2Score(team2Score - 1)}
            >
              <FaMinusCircle />
            </button>
            <label>
              {team2Name.substring(0, 10)} Score : {team2Score}
            </label>
            <button
              type="button"
              className="add-btn"
              onClick={() => setTeam2Score(team2Score + 1)}
            >
              <FaPlusCircle />
            </button>
          </div>
          <div>
            <button type="button" className="btn" onClick={resetTeam2Score}>
              Reset Team 2 Score
            </button>

            <button type="button" className="btn" onClick={resetTeam2}>
              Reset Team 2 Players
            </button>
          </div>
          <div>
            <ChromePicker
              color={team2Color}
              onChangeComplete={(color) => setTeam2Color(color.hex)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Controller;
