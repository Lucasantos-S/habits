import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { generateDatesFromYearBeginning } from "../../utils/generate-Dates";
import { HabitDay } from "./HabitDay";
import WeekDays from "./WeekDays";

const generateDatesFromYear = generateDatesFromYearBeginning();
const minimunSummaryDatesSize = 18 * 7; // quantidade de quadrados minumos

const amountOfDatesToFill =
  minimunSummaryDatesSize - generateDatesFromYear.length;

type summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

function SummaryTable() {
  const [summary, setSummry] = useState<summary>([]);
  useEffect(() => {
    api.get("summary").then((response) => {
      setSummry(response.data);
    });
    
  }, []);
  return (
    <div className="w-full flex gap-3">
      <WeekDays />
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {generateDatesFromYear.map((date) => { 
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, "day");
          });
          return (
            <HabitDay
              key={date.toString()}
              date={date}
              completed={dayInSummary?.completed}
              amount={dayInSummary?.amount}
            />
          );
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
