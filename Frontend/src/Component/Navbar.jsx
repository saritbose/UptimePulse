import { SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import {
  AlignJustify,
  Bird,
  Cat,
  Dog,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" sm:bg-blue-600 bg-white">
      <div className="hidden sm:flex flex-col justify-between h-screen w-12">
        <div className="flex flex-col gap-2 items-center pt-3">
          <UserButton />
          <div className="rounded-lg bg-white w-8 h-8 text-center text-xl cursor-pointer">
            +
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <div className="rounded-lg bg-white w-8 h-8 p-1.5 cursor-pointer ">
            <Settings size={20} />
          </div>
          <SignOutButton>
            <div className="rounded-lg bg-white w-8 h-8 p-1.5 cursor-pointer">
              <LogOut size={20} />
            </div>
          </SignOutButton>
        </div>
        <div className="flex flex-col gap-2 items-center pb-3">
          <div>
            <Cat className="text-white" />
          </div>
          <div>
            <Bird className="text-white" />
          </div>
          <div>
            <Dog className="text-white" />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center rounded-lg px-3 w-screen h-12">
        <div className="rounded-lg flex items-center justify-center bg-slate-500/20  w-8 h-8">
          <AlignJustify size={20} className="cursor-pointer" />
        </div>
        <div className="rounded-lg flex justify-between items-center px-2 bg-slate-500/20 text-blue-600 w-8 h-8 text-3xl cursor-pointer">
          <Plus size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
