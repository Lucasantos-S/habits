import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface HabitDayProps {
  date: Date;
  completed?: number;
  amount?: number;
}
interface HabitDay  {
  completedHabits:[],
  possibleHabits: [
    created_at: string,
    id:string,
    title:string
  ]
}
export function HabitDay({ completed = 0, amount = 0, date }: HabitDayProps) {
  const [data, setData] = useState<HabitDay>();
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");
  const teste = dayjs(date).format("YYYY-MM-DDT03:00:00.000");

  useEffect(() => {
    api.get(`day?date=${date}`).then((response) => {
      setData(response.data);
      console.log(data);
      
    });
  }, []);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg",
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
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className=" mt-1 font-extrabold leading-tight text-2xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={75} />
          <div className="mt-6 flex flex-col gap-3">
            {data?.possibleHabits.map((habits, index) => {
              let checked
              if(data.completedHabits){
                checked = data?.completedHabits.includes(habits.id)
              }
              return (
                <Checkbox.Root checked={checked}  key={habits + index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500   group-data-[state=checked]:border-green-500">
                    <Checkbox.Indicator >
                      <Check size={20} className="text-white "></Check>
                    </Checkbox.Indicator>
                  </div>
                  <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                   {habits.title}
                  </span>
                </Checkbox.Root>
              );
            })}
          </div>
          <Popover.Arrow width={20} height={10} className=" fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
