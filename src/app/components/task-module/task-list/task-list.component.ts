import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskModel } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['complated', 'description', 'deadLineTime', 'createdTime','id'];
  dataSource = new MatTableDataSource<TaskModel>([]);
  EditId:number=-1;
  currentTask={description:'',complated:false}
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(data=>{
      console.log(data)
      this.dataSource.data = data;
    })
  }

  setCurrentComplated(obj:any){
    this.currentTask.complated=obj.checked
    console.log(this.currentTask)
  }

  setCurrentDescription(obj:any){

    this.currentTask.description=obj.target.value
    console.log(this.currentTask,obj)
  }

  toggleEditMode(task:TaskModel){
    if(this.EditId === -1){
      this.EditId = task.id;
      this.currentTask.complated=task.complated;
      this.currentTask.description=task.description;
    }
    else{
      this.EditId = -1;
      this.updateTask({...task, ...this.currentTask});
    }
    
  }

  updateTask(newTask:TaskModel){
    console.log(this.currentTask)
   this.taskService.updateTask(newTask);
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id);
  }
}

