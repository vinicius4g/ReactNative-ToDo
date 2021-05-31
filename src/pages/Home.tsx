import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  
  const [ tasks, setTasks] = useState<Task[]>([])
  
  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle){
      if(newTaskTitle != '' || typeof newTaskTitle === 'string'){
        const task: Task = {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        } 
        setTasks(oldState => [...oldState, task])  
      }
    }
    else {
      return Alert.alert('Adição de task negada 😢 !','Campo Vazio ou Inválido!')
    }
  }
  function handleMarkTaskAsDone(id: number) {
    const tasksAux = tasks.map(task =>{ 
      
      if(task.id === id){
        return {
          ...task,
          done: !task.done
        }
        }else{
          return task
      }
    })
    setTasks(tasksAux);
  }

  function handleRemoveTask(id: number) {  
      let tasksAux: Array<Task> = [];
      
      tasks.filter(item => {
        if(item.id != id){
          tasksAux.push(item)
        }
      })
      setTasks(tasksAux)
    
    Alert.alert('Remoção de Task 😬  ','Você removeu uma task')
  }
  
  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}