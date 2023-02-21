import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { DeleteButton } from './DeleteButton'
import './Task.css'

interface TaskProps {
  id: number
  title: string
  isComplete: boolean
  onToggleTaskComplete: (id: number) => void
  onDeleteTask: (id: number) => void
}


export function Task({id, title, isComplete, onToggleTaskComplete, onDeleteTask}:TaskProps) {

  function atToggle(id:number) {
    onToggleTaskComplete(id)
  }


  
    return (
        <div className={`tasks ${isComplete ? 'done' : ''}`}>
        <section>
          <Checkbox id={id} onToggleTaskComplete={() => atToggle(id)} completeStatus={isComplete} />
          <p>{title}</p>
        </section>
        <DeleteButton id={id} atDeleteTask={() => onDeleteTask(id)}/>
      </div>
    )
}