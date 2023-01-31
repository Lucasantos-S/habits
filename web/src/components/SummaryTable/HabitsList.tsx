import { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { api } from "../../lib/axios";
import dayjs from "dayjs";

interface HabitsListProps {
  date: Date;
  handleCompletedChage: (completed: number) => void;
}

interface habitsInfoProps {
  possibleHabits: Array<{
    created_at: string;
    id: string;
    title: string;
  }>;
  completedHabits: string[];
}

function HabitsList({ date, handleCompletedChage }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<habitsInfoProps>();

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  async function handleToggleHabit(habitId: string) {
    await api.patch(`habits/${habitId}/toggle`);
    const insHabitAlreadyCompleted =
      habitsInfo?.completedHabits.includes(habitId);

    let completedHabits: string[] = [];
    if (insHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });
    handleCompletedChage(completedHabits.length)
  }

  const isDateInPast = dayjs(date).endOf("day").isBefore(new Date());
  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habits, index) => {
        return (
          <Checkbox.Root
            key={habits.id}
            onCheckedChange={() => handleToggleHabit(habits.id)}
            checked={habitsInfo.completedHabits.includes(habits.id)}
            disabled={isDateInPast}
            className=" flex items-center gap-3 group transition-all"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500   group-data-[state=checked]:border-green-500 transition-all">
              <Checkbox.Indicator>
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
  );
}

export default HabitsList;
