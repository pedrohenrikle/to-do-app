import logo from './assets/logo.svg'
import { Task } from './components/Task'
import { Input } from './components/Input'
import { CreateButton } from './components/CreateButton'
import { FormEvent, useState } from 'react'
import { ClipboardText } from 'phosphor-react'


const tasks = [
    {
        id: 1,
        title: 'Exemplo de tarefa',
        isComplete: false,
    },
    {
        id: 2,
        title: 'Exemplo de tarefa completa',
        isComplete: true,
    },
]



export function App() {
    const [taskList, setTaskList] = useState(tasks)
    const [inputValue, setInputValue] = useState('')


    function createNewTask(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: new Date().getTime(),
            title: inputValue,
            isComplete: false,
        }
        setTaskList([newTask, ...taskList])
        setInputValue('')
    }

    function inputNewTask( event: React.ChangeEvent<HTMLInputElement> ) {
        setInputValue(event.target.value)
    }

    function toggleTaskComplete(id: number) {
      const updatedTasks = taskList.map(task => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
      setTaskList(updatedTasks);
    }

    function deleteTask(TaskToDeleteID: number) {
      const TasksWithoutDeletedOne = taskList.filter(task => {
          return task.id !== TaskToDeleteID
      })

      setTaskList(TasksWithoutDeletedOne)
  }


    return (
        <div className='background'>
        <div className="header">
          <img src={logo} alt="Logo ToDo" />
        </div>
    
        <form onSubmit={createNewTask} className="wrapper">
          <Input value={inputValue} onInputNewTask={inputNewTask} />
          <CreateButton  />
        </form>
    
        <main>
          <div className="content-top">
            <section className='created-tasks'>
              <p>Tarefas criadas</p><span>{taskList.length}</span>
            </section>
    
            <section className='done-tasks'>
              <p>Concluidas</p> <span>
                {taskList.filter(task => task.isComplete).length | 0} de {taskList.length}</span>
            </section>
          </div>
    
          <article>
    
            {taskList.map((task) => (
              <Task 
                key={task.id} 
                id={task.id} 
                title={task.title} 
                isComplete={task.isComplete}
                onToggleTaskComplete={() => toggleTaskComplete(task.id)}
                onDeleteTask={() => deleteTask(task.id)}
              />
            ))}

            {taskList.length > 0 ? null : (
              <div className='emptyContent'>
                <ClipboardText size={56} color="#333333" />
                
                <section>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </section>
              </div>
              
            )}
    
          </article>
        </main>
      </div>
    
    )
}