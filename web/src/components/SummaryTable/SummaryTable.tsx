import { generateDatesFromYearBeginning } from "../../utils/generate-Dates";
import { HabitDay } from "./HabitDay";
import WeekDays from "./WeekDays";

const generateDatesFromYear = generateDatesFromYearBeginning();
const minimunSummaryDatesSize = 18 * 7; // quantidade de quadrados minumos

const amountOfDatesToFill =
  minimunSummaryDatesSize - generateDatesFromYear.length;

function SummaryTable() {
  return (
    <div className="w-full flex gap-3">
      <WeekDays />
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {generateDatesFromYear.map((yars, index) => {
          console.log(yars);
          
          return <HabitDay completed={Math.round(Math.random() * 5)} amount={5}  key={yars.toString()}/>;
        })}

        {amountOfDatesToFill > 0 &&
          Array.from({ length: amountOfDatesToFill }).map((_, inedex) => (
            <div
              key={inedex}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 opacity-40 cursor-not-allowed rounded-lg"
            ></div>
          ))}
      </div>
    </div>
  );
}

export default SummaryTable;
