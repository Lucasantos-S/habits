import { Check } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import { api } from "../../lib/axios";

const availabelWeekDay = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setweekDaus] = useState<number[]>([]);
  const [error, setError] = useState("");

  function creteNewHabit(event: FormEvent) {
    event.preventDefault()
    if(!title || weekDays.length ===0) return setError('E necessario o prenchimento de todos os campos abaixo!')
     
    api.post('habits', {
      title,
      weekdays: weekDays,
    })
    setTitle('')
    setweekDaus([])
    alert('Habitos criado com sucesso!')
  }

  function handleToggleWeekDay(weekDay: number) {
    setError('')
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day != weekDay);
      setweekDaus(weekDaysWithRemovedOne);
      console.log(weekDays)
      
    } else {
      const weekDaysWithAdddOne = [...weekDays, weekDay];
      setweekDaus(weekDaysWithAdddOne);
      console.log(weekDays)
    }
  }
  return (
    <form onSubmit={creteNewHabit} className="w-full flex flex-col mt-6">
      {error? <p className=" text-red-500 text-sm mb-2">{error}</p> : null}
      <label htmlFor="habit" className="font-semibold leading-tight">
        Qaul o seu compromentimento?
      </label>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="ex: Exercicios, dormi bem, etc..."
        className="p-4 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 outline-none mt-5"
        autoFocus
        onChange={({ target }) => {
          setTitle(target.value)
          setError('')
        }}
        
      />
      <label
        htmlFor=" Qual a recorrencia"
        className="font-semibold leading-tight mt-4 "
      >
        Qual a recorrencia?
      </label>
      <div className=" mt-5 flex flex-col gap-3">
        {availabelWeekDay.map((day, index) => {
          return (
            <Checkbox.Root
              key={day}
              className="flex items-center gap-3 group"
              checked={weekDays.includes(index)}
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500   group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white "></Check>
                </Checkbox.Indicator>
              </div>
              <span className=" text-white leading-tight">{day}</span>
            </Checkbox.Root>
          );
        })}
      </div>
      <button className="continue-application  mt-5 bg-green-600 hover:bg-green-500 font-semibold leading-tight ">
        <div className=" bg-zinc-700 border-none">
          <div className="pencil "></div>
          <div className="folder ">
            <div className="top ">
              <svg viewBox="0 0 24 27">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
              </svg>
            </div>
            <div className="paper"></div>
          </div>
        </div>
        Confirmar
      </button>
    </form>
  );
}
