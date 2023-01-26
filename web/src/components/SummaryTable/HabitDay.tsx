import { generateDatesFromYearBeginning } from "../../utils/generate-Dates";
import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

const generateDatesFromYear = generateDatesFromYearBeginning();
const minimunSummaryDatesSize = 18 * 7; // quantidade de quadrados minumos

const amountOfDatesToFill =
  minimunSummaryDatesSize - generateDatesFromYear.length;
export function HabitDay() {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {generateDatesFromYear.map((yars, index) => {
        return (
          <Popover.Root key={yars.toDateString()}>
            <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                <span className="font-semibold text-zinc-400">
                  Segunda Feita
                </span>
                <span className=" mt-1 font-extrabold leading-tight text-2xl">
                  17/01
                </span>

                <ProgressBar progress={75} />
                <Popover.Arrow
                  width={20}
                  height={10}
                  className=" fill-zinc-900"
                />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
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
  );
}
