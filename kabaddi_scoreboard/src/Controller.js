import React from "react";
import { ChromePicker } from "react-color";
import { useGlobalContext } from "./Context";
import { FaPlusCircle, FaMinusCircle, FaExchangeAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
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

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  return (
    <>
      <button type="button" onClick={SwitchTeam} className="Switch-btn">
        <FaExchangeAlt onClick={SwitchTeam} /> Switch Team{" "}
        <FaExchangeAlt onClick={SwitchTeam} />
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
              {team1Name.substring(0, 12)} Score : {team1Score}
            </label>
            <button
              type="button"
              className="add-btn"
              onClick={() => setTeam1Score(team1Score + 1)}
            >
              <FaPlusCircle />
            </button>
          </div>
          <div className="reset-div">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: team1Color }}
              onClick={resetTeam1Score}
            >
              Reset Team 1 Score
            </button>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: team1Color }}
              onClick={resetTeam1}
            >
              Reset Team 1 Players <IoPerson />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="color-btn"
              onClick={() => setShow1(!show1)}
            >
              Pick Color
            </button>
            {show1 && (
              <ChromePicker
                color={team1Color}
                onChangeComplete={(color) => setTeam1Color(color.hex)}
              />
            )}
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
              {team2Name.substring(0, 12)} Score : {team2Score}
            </label>
            <button
              type="button"
              className="add-btn"
              onClick={() => setTeam2Score(team2Score + 1)}
            >
              <FaPlusCircle />
            </button>
          </div>
          <div className="reset-div">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: team2Color }}
              onClick={resetTeam2Score}
            >
              Reset Team 2 Score
            </button>

            <button
              type="button"
              className="btn"
              style={{ backgroundColor: team2Color }}
              onClick={resetTeam2}
            >
              Reset Team 2 Players <IoPerson />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="color-btn"
              onClick={() => setShow2(!show2)}
            >
              Pick Color
            </button>
            {show2 && (
              <ChromePicker
                color={team2Color}
                onChangeComplete={(color) => setTeam2Color(color.hex)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Controller;
