import dayjs from "dayjs";
import React, { useState } from "react";

function Dateday() {
  const [hous, setHous] = useState<string>("");
  function getHousDay() {
    setHous(`${dayjs().hour()}:${dayjs().minute()}`);
  }

  const dayAndMonth = dayjs(new Date()).format("DD/MM");
  const dayOfWeek = dayjs(new Date()).format("dddd");

  setInterval(getHousDay, 1000);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
      <span>{dayOfWeek}</span>
      <span>{dayAndMonth}</span>
      </div>
      <div>
        <h1 className="text-5xl">{hous}</h1>
      </div>
    </div>
  );
}
 
export default Dateday;
