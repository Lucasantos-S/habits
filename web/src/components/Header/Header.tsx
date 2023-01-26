import React from "react";
import { CreatedHabits } from "../Habits/CreatedHabits";
import Logo from "./Logo";

function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <Logo />
     <CreatedHabits/>
    </div>
  );
}

export default Header;
