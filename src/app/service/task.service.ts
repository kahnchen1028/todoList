import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList:TaskModel[]=[
    {
      id:new Date().getTime(),
      description:"買東西",
      deadLineTime:new Date(),
      createdTime:new Date().getTime(),
      complated:true
    }
  ]
  taskSubject$ = new BehaviorSubject<TaskModel[]>(this.taskList)
  
  constructor() { }

  addTaskList(task:TaskModel){
    let newTask = {
      ...task,
      id:new Date().getTime(),
    }
    this.taskList.push(newTask);
    this.taskSubject$.next(this.taskList);    
  }

  updateTask(newTask:TaskModel){
    console.log(newTask)
    this.taskList = this.taskList.map(task=>{
      if(task.id === newTask.id){
        return newTask;
      }
      return task;
    })
    this.taskSubject$.next(this.taskList);    
  }

  deleteTask(id:number){
    this.taskList = [...this.taskList.filter(task=>{
      if(task.id !== id){
        return true;
      }
      return false;
    })]
    this.taskSubject$.next(this.taskList);    
  }

  getTaskList(){
    return this.taskSubject$.asObservable()
  }
}
