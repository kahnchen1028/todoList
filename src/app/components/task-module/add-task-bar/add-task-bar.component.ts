import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task-bar',
  templateUrl: './add-task-bar.component.html',
  styleUrls: ['./add-task-bar.component.scss']
})
export class AddTaskBarComponent implements OnInit {
  taskForm: FormGroup;
  constructor(private fb:FormBuilder,private taskService:TaskService) {
    this.taskForm = this.fb.group({
      id:new FormControl(null),
      description:new FormControl(''),
      deadLineTime:new FormControl(new Date()),
      createdTime:new FormControl(null),
      complated:false
    })
   }

  ngOnInit(): void {
   
  }

  addNewTask(){
    this.taskService.addTaskList({...this.taskForm.value,createdTime:new Date().getTime()})
    this.taskForm.patchValue({description:'',complated:false})
  }
}
