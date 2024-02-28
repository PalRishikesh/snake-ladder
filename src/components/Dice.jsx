import "./Dice.css"

const Dice = ({randomNumber}) => {
console.log("generatedRandomNumber: ",randomNumber);

var btnClassName = `dice_${randomNumber}`
  return (
    <div className="dice-rolling" >
      <span className={btnClassName}></span>
    </div>
  );
};

export default Dice;
