import { generateDatesFromYearBeginning } from "../../utils/generate-Dates";

const generateDatesFromYear = generateDatesFromYearBeginning();
function HabitDay() {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {generateDatesFromYear.map((yars, index) => {
        console.log(yars)
        return (      
          <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
        );
      })}
    </div>
  );
}

export default HabitDay;
