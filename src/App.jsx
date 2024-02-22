import './App.css'
import Dice from './components/Dice'
import LeaderBoard from './components/LeaderBoard'
const ladders = {
  6: 40,
  19: 24,
  52: 19,
  57: 41
};
const snakes = {
  96: 21,
  62: 22,
  48: 31
};

function App() {
  let lastDiceNumber = 1;

  const getNextPointerPosition = (nextBoardPosition) => {
    let nextPointerElement = '';
    for (const singleTile of tile) {
        //Check next element value
        if (singleTile.getAttribute('data-id') == nextBoardPosition) {
            console.log("singleTile: ", singleTile);
            console.log("singleTile: ", singleTile.getAttribute('data-id'));
            nextPointerElement = singleTile;
            break;
        }
    }
    return nextPointerElement;
}

  const changeCoinPosition = (previousDiceNumber, diceType) => {
    const currentPosition = getNextPointerPosition(previousDiceNumber);
    console.log("currentPosition: ", currentPosition);
    // console.log("previousDiceNumber: ",previousDiceNumber);
    let previousDiceChildren = currentPosition.children;
    let previousDiceElement = '';
    for (let index = 0; index < previousDiceChildren.length; index++) {
        const element = previousDiceChildren[index];
        if (element.className === diceType) {
            previousDiceElement = element;
            break;
        }
    }
    // Removing the dice from previous location
    previousDiceElement.remove();
}

const generateDiceRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1
}
  const rollDice=()=>{
    // const boardPointerMessage = document.getElementById("boardPointerMessage");
    // boardPointerMessage.innerHTML = '';
    // boardPointerMessage.classList.remove('board-success-message')
    // boardPointerMessage.classList.remove('board-fail-message')
    let userClickDiceRoll = '';
    let extraChange = false;

    // changeCoinPosition(lastDiceNumber, 'dice');
    const randomNumber = generateDiceRandomNumber();
    if (randomNumber == 6) {
        extraChange = true;
    }

    if (lastDiceNumber + randomNumber <= 100) {
        lastDiceNumber += randomNumber;
    }
    console.log("lastDiceNumber: ",lastDiceNumber);
    // let value = document.getElementById("diceValue");
    // value.innerHTML = lastDiceNumber;

    // Roll the dice with css start herr
    // rollDiceWithUI(randomNumber);


    alert("hi");
  }
  return (
    <>
      <LeaderBoard/>
      {/* <button id="dice" onClick={rollDice}>Roll Dice</button> <span id="diceValue"></span> */}
    {/* <button id="systemDice" onclick="rollDiceSystem()">System Roll Dice</button><span id="systeDiceValue"></span> */}
    <div>
      <div>User Won <span id="userWonCount">0</span></div>
      <div>System Won <span id="systemWonCount">0</span></div>
    </div>
    </>
  )
}

export default App
