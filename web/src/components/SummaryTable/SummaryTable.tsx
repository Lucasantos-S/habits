import React from 'react'
import HabitDay from './HabitDay'
import WeekDays from './WeekDays'

function SummaryTable() {
  return (
    <div className="w-full flex gap-3">
       <WeekDays/>
       <HabitDay/>
    </div>
  )
}

export default SummaryTable