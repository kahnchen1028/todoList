import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from 'src/app/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList:TaskModel[]=[]
  taskSubject$ = new BehaviorSubject<TaskModel[]>(this.taskList)
  
  constructor() {
    let tempTaskList = sessionStorage.getItem('tempTaskList')
    if(tempTaskList !== null){
      this.taskList=[...JSON.parse(tempTaskList)]
    }
  }

  getTaskList(){
    return this.taskSubject$.asObservable()
  }

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


  searchTask(keyword:string){
    console.log(keyword)
    let searchResult = [...this.taskList.filter(task=>{
      if(task.description.indexOf(keyword) !== -1){
        return true;
      }
      return false;
    })]
    this.taskSubject$.next(searchResult);  
  }

  settingStorge(){
    sessionStorage.setItem('tempTaskList',JSON.stringify(this.taskList))
  }
}
