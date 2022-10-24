import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList:TaskModel[]=[
    {
      id:0,
      description:"買東西",
      deadLineTime:new Date(),
      createdTime:new Date().getTime(),
      complated:true
    }
  ]
  taskSubject$ = new BehaviorSubject<TaskModel[]>(this.taskList)
  
  constructor() { }

  addTaskList(task:TaskModel){
    this.taskList.push(task);
    this.taskSubject$.next(this.taskList);    
  }

  updateTask(newTask:TaskModel){
    this.taskList = [...this.taskList,{...newTask}];
    console.log(this.taskList)
    this.taskSubject$.next(this.taskList);    
  }

  getTaskList(){
    return this.taskSubject$.asObservable()
  }
}
