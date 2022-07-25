import React from "react";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { useGlobalContext } from "./Context";
const Players = () => {
  const {
    isOutTeam1,
    setIsOutTeam1,
    isOutTeam2,
    setIsOutTeam2,
    midText,
    setMidText,
  } = useGlobalContext();
  return (
    <div className="players">
      <div className="team1Players">
        <div>
          {!isOutTeam1.p1 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p1: !isOutTeam1.p1 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p1: !isOutTeam1.p1 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p2 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p2: !isOutTeam1.p2 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p2: !isOutTeam1.p2 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p3 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p3: !isOutTeam1.p3 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p3: !isOutTeam1.p3 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p4 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p4: !isOutTeam1.p4 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p4: !isOutTeam1.p4 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p5 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p5: !isOutTeam1.p5 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p5: !isOutTeam1.p5 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p6 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p6: !isOutTeam1.p6 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p6: !isOutTeam1.p6 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam1.p7 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p7: !isOutTeam1.p7 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam1({ ...isOutTeam1, p7: !isOutTeam1.p7 })
              }
            />
          )}
        </div>
      </div>

      <div className="info" onClick={() => setMidText(!midText)}>
        {midText ? "1st Half" : "2nd Half"}
      </div>

      {/* -------------------------------------------TEAM 2-------------------------------------------------- */}
      <div className="team2Players">
        <div>
          {!isOutTeam2.p1 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p1: !isOutTeam2.p1 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p1: !isOutTeam2.p1 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p2 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p2: !isOutTeam2.p2 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p2: !isOutTeam2.p2 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p3 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p3: !isOutTeam2.p3 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p3: !isOutTeam2.p3 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p4 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p4: !isOutTeam2.p4 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p4: !isOutTeam2.p4 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p5 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p5: !isOutTeam2.p5 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p5: !isOutTeam2.p5 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p6 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p6: !isOutTeam2.p6 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p6: !isOutTeam2.p6 })
              }
            />
          )}
        </div>
        <div>
          {!isOutTeam2.p7 ? (
            <IoPersonOutline
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p7: !isOutTeam2.p7 })
              }
            />
          ) : (
            <IoPerson
              onClick={() =>
                setIsOutTeam2({ ...isOutTeam2, p7: !isOutTeam2.p7 })
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
