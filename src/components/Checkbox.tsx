
import { Hand } from 'phosphor-react'
import { useState } from 'react'
import './Checkbox.css'


interface CheckboxProps {
    id: number
    completeStatus: boolean
    onToggleTaskComplete: (id: number) => void
}


export function Checkbox({id, completeStatus, onToggleTaskComplete}: CheckboxProps) {

    function handleChangeStatus(id:number) {
        onToggleTaskComplete(id)
    }

    return (
        <form>
            <input 
                className="checkbox" 
                type="checkbox" 
                checked={completeStatus} 
                onChange={() => handleChangeStatus(id)}
            />
        </form>
    )
}