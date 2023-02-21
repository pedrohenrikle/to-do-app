import { FormEvent, InvalidEvent, useState } from 'react'
import './Input.css'

interface InputProps {
  onInputNewTask: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function Input({ onInputNewTask, value} : InputProps) {

  function handleInputNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    onInputNewTask(event)
  }


    return (
      <input 
        onChange={handleInputNewTask} 
        type="text"
        value={value} 
        className='inputTask' 
        placeholder='Adicione uma nova tarefa' 
        required
      />

    )
}