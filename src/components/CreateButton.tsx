import { PlusCircle } from "phosphor-react";
import './CreateButton.css'


interface CreateButtonProps {
}

export function CreateButton() {



    return (
        <button className='addTask'>
            Criar
            <PlusCircle size={16} color="#f2f2f2" />
        </button>
    )
}