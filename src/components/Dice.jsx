import "./Dice.css"

const Dice = ({randomNumber}) => {
console.log("generatedRandomNumber: ",randomNumber);

var btnClassName = `dice_${randomNumber}`
  return (
    // <div className="dice-rolling" >
      <div className="dice-inner-box">
      <span className={"dice-rolling "+ btnClassName}></span>
   </div>
  );
};

export default Dice;
