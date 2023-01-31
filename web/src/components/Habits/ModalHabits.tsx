import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import {NewHabitForm} from "./NewHabitForm";
function ModalHabits() {
  return (
    <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className=" border border-violet-500   font-semibold rounded-lg px-6 py-4 flex items-center gap-4 hover:bg-violet-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background "
        >
          <Plus size={20} className="text-violet-500" />
          Criar novo habito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0 transition-all" />
          <Dialog.Content className=" absolute p-10 bg-zinc-900 w-full max-w-md  rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
            <Dialog.Close className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-200 outline-none transition-colors  focus:ring-2 focus:ring-violet-700focus:ring-offset-2 focus:ring-offset-background   " >
              <X size={24}/>
            </Dialog.Close>
            <Dialog.Title className=" leading-tight text-2xl font-extrabold">
                Criar hábito
            </Dialog.Title>
            <NewHabitForm/>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}

export default ModalHabits