
const DiceClick = (props) => {
    const rollDice=()=>{
        props.childHanlderEvent();
    }
  return (
    <button id="dice" onClick={rollDice} disabled={props.disabled}>Roll Dice</button>
  )
}

export default DiceClick