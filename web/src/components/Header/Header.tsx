import React from "react";
import logoImage from "../../assets/logo.svg";
import { Plus } from "phosphor-react";
function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="" />
      <button className=" border border-violet-500     font-semibold rounded-lg px-6 py-4 flex items-center gap-4 hover:bg-violet-900">
        <Plus size={20} className="text-violet-500" />
        Criar novo habito
      </button>
    </div>
  );
}

export default Header;
