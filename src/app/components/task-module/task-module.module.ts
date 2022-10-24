import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskBarComponent } from './add-task-bar/add-task-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from 'src/app/share-module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTaskBarComponent,
    TaskListComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    AddTaskBarComponent,
    TaskListComponent 
  ]

})
export class TaskModule { }
