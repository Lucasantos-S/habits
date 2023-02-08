import { CreatedHabits } from "../Habits/CreatedHabits";
import Logo from "./Logo";
import Dateday from "./Dateday";

function Header() {
  
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <Logo />
      <div>
        {/* <Dateday/> */}
        <CreatedHabits />
      </div>
    </div>
  );
}

export default Header;
