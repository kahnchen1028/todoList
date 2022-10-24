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
  displayedColumns: string[] = ['complated', 'description', 'deadLineTime', 'createdTime'];
  dataSource = new MatTableDataSource<TaskModel>([]);
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(data=>{
      this.dataSource.data = data;
    })
  }

  updateTask(newTask:TaskModel){
   this.taskService.updateTask(newTask);
  }

}

