import "./Dice.css"

const Dice = ({randomNumber}) => {
console.log("randomNumber: ",randomNumber);
let generatedRandomNumber = 1;
if(randomNumber !== undefined){
    generatedRandomNumber = randomNumber;
}
console.log("generatedRandomNumber: ",generatedRandomNumber);
var btnClassName = `dice_${generatedRandomNumber}`
  return (
    <div className="dice-rolling">
      <span className={btnClassName}></span>
    </div>
  );
};

export default Dice;
