import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import dayjs from "dayjs";

import HabitsList from "./HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  dfaultCompleted?: number;
  amount?: number;
}

export function HabitDay({ dfaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(dfaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;
  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  function handleCompletedChage(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors",
          {
            "bg-zinc-900": completedPercentage == 0,
            "bg-violet-900  border-violet-900":
              completedPercentage > 0 && completedPercentage < 20,
            "bg-violet-800  border-violet-800":
              completedPercentage >= 20 && completedPercentage < 40,
            "bg-violet-700  border-violet-700":
              completedPercentage >= 40 && completedPercentage < 60,
            "bg-violet-600  border-violet-600":
              completedPercentage >= 60 && completedPercentage < 80,
            "bg-violet-500  border-violet-500": completedPercentage >= 80,
          }
        )}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col transition-colors">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className=" mt-1 font-extrabold leading-tight text-2xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPercentage} />
          <HabitsList date={date} handleCompletedChage={handleCompletedChage} />
          <Popover.Arrow width={20} height={10} className=" fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
