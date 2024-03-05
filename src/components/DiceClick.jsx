
const DiceClick = (props) => {
    const rollDice=()=>{
        props.childHanlderEvent();
    }
  return (
    <button id="dice" onClick={rollDice} disabled={props.disabled} width={1000} >{props.disabled ? 'System is Rolling Dice':'Your chance Roll Dice'} </button>
  )
}

export default DiceClick