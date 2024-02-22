
const DiceClick = (props) => {
    const rollDice=()=>{
        props.childHanlderEvent();
    }
  return (
    <button id="dice" onClick={rollDice}>Roll Dice</button>
  )
}

export default DiceClick