import { Trash } from "phosphor-react";
import './DeleteButton.css'

interface DeleteButtonProps {
    id: number, 
    atDeleteTask: (id: number) => void
}

export function DeleteButton({id,  atDeleteTask}: DeleteButtonProps) {

    function handleDeleteTask(id: number) {
        atDeleteTask(id)
    }

    return (
        <button onClick={() => handleDeleteTask(id)} className="deleteButton"><Trash size={14}/></button>
    )
}