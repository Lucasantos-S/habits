const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
function WeekDays() {
  return (
    <div className="grid grid-rows-7 grid-flow-row gap-3 items-center w-10 ">
      {weekDays.map((day, index) => (
        <div
          key={`${index}-${day}`}
          className="text-zinc-400  text-xl font-bold items-center justify-center"
        >
          {day}
        </div>
      ))}
    </div>
  );
}
export default WeekDays;
