import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskBarComponent } from './add-task-bar/add-task-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    TaskComponent,
    AddTaskBarComponent,
    TaskListComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskComponent,
    AddTaskBarComponent,
    TaskListComponent 
  ]

})
export class TaskModule { }
