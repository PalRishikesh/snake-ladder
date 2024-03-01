import { useState, useEffect } from "react";
import Dice from "./Dice";
import DiceClick from "./DiceClick";
import "./LeaderBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserCountImg from "./../assets/images/user-30.png";
import SystemCountImg from "./../assets/images/system-30.png";
// Leaderboard matrix

const rows = [
  [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

// Ladder object to upgrade the point
const ladders = {
  6: 46,
  19: 43,
  52: 71,
  57: 98,
};

// Snake object to downgrad the point
const snakes = {
  96: 75,
  62: 40,
  48: 9,
};

const successToast = (message = false) => {
  let successMessageContent = "Success operation";
  if (message) successMessageContent = message;
  toast.success(successMessageContent);
};

const failToast = (message = false) => {
  let failMessageContent = "Something went wrong...";
  if (message) failMessageContent = message;
  toast.warn(failMessageContent);
};

const LeaderBoard = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [userRandomNumber, setUserRandomNumber] = useState(1);
  const [systemRandomNumber, setSystemRandomNumber] = useState(1);
  const [userDiceRoll, setUserDiceRoll] = useState(false);
  const [isUserClick, setIsUserClick] = useState(false);
  const [userWonCount, setUserWonCount] = useState(
    localStorage.getItem("userWonCount")
  );
  const [systemWonCount, setSystemWonCount] = useState(
    localStorage.getItem("systemWonCount")
  );
  // const [rows, setRows] = useState([Array(),Array([11,12])])
  const resetGame = () => {
    setRandomNumber(1);
    setUserRandomNumber(1);
    setSystemRandomNumber(1);
  };
  const userWon = () => {
    let userWonCount = localStorage.getItem("userWonCount");
    if (userWonCount == null || userWonCount == undefined) {
      userWonCount = 1;
    } else {
      userWonCount++;
    }
    setUserWonCount(userWonCount);
    localStorage.setItem("userWonCount", userWonCount);
  };

  const systemWon = () => {
    let systemWonCount = localStorage.getItem("systemWonCount");
    console.log("userWon C: ", systemWonCount);
    if (systemWonCount == null || systemWonCount == undefined) {
      systemWonCount = 1;
    } else {
      systemWonCount++;
    }
    setSystemWonCount(systemWonCount);

    localStorage.setItem("systemWonCount", systemWonCount);
  };

  const onDiceRollEvent = (system = false) => {
    const diceRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(diceRandomNumber);

    if (system) {
      setIsUserClick(false);
      const totalRandomNumber = systemRandomNumber + diceRandomNumber;
      if (totalRandomNumber <= 100) {
        setSystemRandomNumber(totalRandomNumber);
      } else {
        setUserDiceRoll(false);
      }
      if (totalRandomNumber == 100) {
        failToast("System have won this Game.");
        systemWon();
        resetGame();
      }
    } else {
      setIsUserClick(true);
      const totalRandomNumber = userRandomNumber + diceRandomNumber;
      if (totalRandomNumber <= 100) {
        setUserRandomNumber(totalRandomNumber);
      }
      if (totalRandomNumber == 100) {
        successToast("You have won this Game.");
        userWon();
        resetGame();
      }
    }
  };

  // useE

  // CalculateLeaderAndSnake
  const calculateExtraPoint = (system = false) => {
    const updatedUserRandomNumber = userRandomNumber;
    const updatedSystemRandomNumber = systemRandomNumber;

    if (system) {
      // If ladder taken place
      if (ladders[updatedSystemRandomNumber]) {
        setSystemRandomNumber(ladders[updatedSystemRandomNumber]);
        console.log(
          "updated value with : ",
          ladders[updatedSystemRandomNumber]
        );
      }
      // If ladder taken place
      if (snakes[updatedSystemRandomNumber]) {
        setSystemRandomNumber(snakes[updatedSystemRandomNumber]);
        console.log(
          "updated value with snakes: ",
          ladders[updatedSystemRandomNumber]
        );
      }
    } else {
      // If ladder taken place
      if (ladders[updatedUserRandomNumber]) {
        setUserRandomNumber(ladders[updatedUserRandomNumber]);
        console.log("updated value with : ", ladders[updatedUserRandomNumber]);
        successToast("Woo, you got ladder");
      }
      // If ladder taken place
      if (snakes[updatedUserRandomNumber]) {
        setUserRandomNumber(snakes[updatedUserRandomNumber]);
        console.log(
          "updated value with snakes: ",
          ladders[updatedUserRandomNumber]
        );
        failToast("Ooh, you lost the point with snake");
      }
    }
  };
  const allCalculation = (system = false) => {
    if (system == false && userRandomNumber > 1) {
      if (randomNumber !== 6) {
        setUserDiceRoll(true);
        setTimeout(() => {
          onDiceRollEvent(true);
        }, 1000);
      } else {
        successToast("Woo, you got 6, Play again");
      }
      // else{
      //   setUserDiceRoll(false);
      // }
    } else {
      if (randomNumber === 6) {
        // setUserDiceRoll(true);
        // successToast("System got 6");
        setTimeout(() => {
          onDiceRollEvent(true);
        }, 1000);
      } else {
        setUserDiceRoll(false);
      }
    }
    calculateExtraPoint(system);
  };
  useEffect(() => {
    // setTimeout(() => {
    allCalculation(!isUserClick);
    // console.log("use effect : ", isUserClick);
    // }, 1000);
  }, [randomNumber, userRandomNumber, systemRandomNumber]);

  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="tile-row">
          {row.map((singleColumns) => {
            return (
              <>
                <div
                  key={singleColumns}
                  className={"tile x" + singleColumns}
                  data-id={singleColumns}
                >
                  {singleColumns}

                  {singleColumns === userRandomNumber ? (
                    <span className="dice"></span>
                  ) : (
                    ""
                  )}

                  {singleColumns === systemRandomNumber ? (
                    <span className="dice-system"></span>
                  ) : (
                    ""
                  )}
                </div>
              </>
            );
          })}
        </div>
      ))}

      {/* rows.map((row)=>(
            <>

            <div key={row} className="tile">{row}
             {
                (row === userRandomNumber) ? <span className="dice"></span>:''
             }
            </div>
            </>
        )) */}
      <div className="dice-outer">
        <div >
        <DiceClick
          childHanlderEvent={onDiceRollEvent}
          disabled={userDiceRoll}
        />
        </div>
        <Dice randomNumber={randomNumber} />
        <div>
          <img src={UserCountImg}   /> <span id="userWonCount"> {userWonCount} </span>
        </div>
        &nbsp;&nbsp;
        <div>
          <img src={SystemCountImg}  /> <span id="systemWonCount">{systemWonCount}</span>
        </div>
      </div>

      <div className="dice-outer">
      
      </div>

      <ToastContainer
        position="top-right"
        autoClose={900}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </>
  );
};

export default LeaderBoard;
