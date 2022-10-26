import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskBarComponent } from './add-task-bar/add-task-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from 'src/app/share-module/material/material.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { TaskSearchComponent } from './task-search/task-search.component';


@NgModule({
  declarations: [
    AddTaskBarComponent,
    TaskListComponent,
    TaskSearchComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    AddTaskBarComponent,
    TaskListComponent,
  ]

})
export class TaskModule { }
